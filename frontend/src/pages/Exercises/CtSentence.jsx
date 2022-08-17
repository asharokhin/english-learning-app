import React from "react";
import PropTypes from "prop-types";
import styles from "./CtSentence.module.css";

const CtSentence = ({ pre, inputNumber, post, inputName, usersAnswer }) => {
  const { isCorrect, answer } = usersAnswer;
  return (
    <>
      <span>{` ${pre} `}</span>
      <b>{` (${inputNumber}) `} </b>
      {usersAnswer ? (
        <span className={isCorrect ? styles.isCorrect : styles.isIncorrect}>
          {answer}
        </span>
      ) : (
        <input name={inputName} type="text" />
      )}

      <span>{` ${post} `}</span>
    </>
  );
};

CtSentence.propTypes = {
  pre: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  inputName: PropTypes.string,
  inputNumber: PropTypes.string.isRequired,
  usersAnswer: PropTypes.shape({
    answer: PropTypes.string,
    isCorrect: PropTypes.bool,
  }),
};

CtSentence.defaultProps = {
  usersAnswer: undefined,
  inputName: "",
};

export default CtSentence;
