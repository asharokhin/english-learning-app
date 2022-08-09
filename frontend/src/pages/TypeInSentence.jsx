import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  selectedAnswer1: yup.string().min(2).max(32),
  selectedAnswer2: yup.string().min(2).max(32),
  selectedAnswer3: yup.string().min(2).max(32),
});

const TypeInSentence = ({ sentence, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const parsedSentence = []; // parts of input sentence

  // make parts out of input sentence
  const parseSentence = () => {
    let cnt = 1; // counter of clozes inside sentence
    let lastHint = 0;
    let idxHintEnd = -1;

    let idxC = sentence.indexOf(`c${cnt}:`); // index of first cloze
    while (idxC > 0) {
      // cloze found
      parsedSentence.push(sentence.substring(lastHint, idxC - 2));
      parsedSentence.push(`inp${cnt}`); // insert string that must be replaced later with <input/> tag

      const idxHintStart = sentence.indexOf("(", idxC); // start index of cloze hint
      idxHintEnd = sentence.indexOf(")", idxC);

      const hint = sentence.substring(idxHintStart, idxHintEnd + 1);
      parsedSentence.push(hint); // insert hint string

      cnt += 1;
      idxC = sentence.indexOf(`c${cnt}:`, idxC);
      lastHint = idxHintEnd + 1;
    }
    parsedSentence.push(sentence.substring(idxHintEnd + 1));
  };

  parseSentence();
  let inputIdx = 0;

  // const unregisterInputs = () => {
  //   const amountInputs = (sentence.match(/{{c/g) || []).length;
  //   for (let i = 1; i <= amountInputs; i += 1) {
  //     unregister(`selectedAnswer${i}`);
  //   }
  // };

  const onSubmitButton = (data) => {
    onSubmit(data);
    reset();
    clearErrors();
    // unregisterInputs();
  };

  const mapSentence = (sentencePart) => {
    if (sentencePart.startsWith("inp")) {
      inputIdx += 1;
      return (
        <label key={sentencePart} htmlFor="radio-1">
          <input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...register(`selectedAnswer${inputIdx}`)}
            type="text"
            name={`selectedAnswer${inputIdx}`}
            required
          />
        </label>
      );
    }
    if (sentencePart.startsWith("(")) {
      return <em key={sentencePart}>{sentencePart}</em>;
    }
    return sentencePart;
  };

  return (
    <form onSubmit={handleSubmit(onSubmitButton)}>
      <div>
        <p>{errors.selectedAnswer1?.message}</p>
        <p>{errors.selectedAnswer2?.message}</p>
        <p>{errors.selectedAnswer3?.message}</p>
        {parsedSentence.map((sentencePart) => mapSentence(sentencePart))}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

TypeInSentence.propTypes = {
  sentence: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default TypeInSentence;
