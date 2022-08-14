import React from "react";
import PropTypes from "prop-types";

import TypeInParagraph from "./TypeInParagraph";

const TypeInQuestion = ({ content, onSubmitAnswer }) => {
  const onInputChanged = (e) => {
    e.preventDefault();

    const amountInputs = content.sentences.length;
    const checkedAnswers = [];

    for (let i = 0; i < amountInputs; i += 1) {
      const usersAnswer = e.target[`input${i}`].value;

      checkedAnswers[i] = {
        answer: usersAnswer,
        isCorrect: usersAnswer === content.sentences[i].answer,
      };
    }
    onSubmitAnswer(checkedAnswers);
  };

  return (
    <form onSubmit={onInputChanged}>
      <div>
        {content.sentences.map((s, i) => (
          <TypeInParagraph
            key={s.hint}
            pre={s.pre}
            hint={s.hint}
            post={s.post}
            name={`input${i}`}
          />
        ))}
      </div>
      <button type="submit">Submit answer</button>
    </form>
  );
};

TypeInQuestion.propTypes = {
  content: PropTypes.shape({
    sentences: PropTypes.arrayOf(
      PropTypes.shape({
        pre: PropTypes.string,
        answer: PropTypes.string,
        post: PropTypes.string,
        hint: PropTypes.string,
      })
    ),
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default TypeInQuestion;
