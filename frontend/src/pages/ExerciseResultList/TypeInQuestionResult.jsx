import React from "react";
import PropTypes from "prop-types";
import TypeInSentenceResult from "./TypeInSentenceResult";

const TypeInQuestionResult = ({ question, usersAnswers, questionIndex }) => {
  const { sentences } = question;
  const usersQuestionAnswers = usersAnswers[questionIndex];
  return (
    <div>
      {sentences.map((s, i) => (
        <TypeInSentenceResult
          key={s.pre}
          sentence={s}
          usersAnswer={usersQuestionAnswers[i]}
        />
      ))}
    </div>
  );
};

TypeInQuestionResult.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string.isRequired),
    sentences: PropTypes.arrayOf(
      PropTypes.shape({
        pre: PropTypes.string.isRequired,
        post: PropTypes.string.isRequired,
        hint: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  usersAnswers: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired
  ).isRequired,
  questionIndex: PropTypes.number.isRequired,
};
export default TypeInQuestionResult;
