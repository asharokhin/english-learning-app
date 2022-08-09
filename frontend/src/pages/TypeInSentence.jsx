import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const TypeInSentence = ({ sentence, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

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
