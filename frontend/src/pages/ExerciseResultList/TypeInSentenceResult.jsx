import React from "react";
import PropTypes from "prop-types";
import styles from "./TypeInSentenceResult.module.css";

const TypeInExerciseResult = ({ sentence, usersAnswer }) => {
  const { pre, post } = sentence;
  const { answer, isCorrect } = usersAnswer;
  return (
    <>
      <span>{`${pre} `}</span>
      <span
        className={isCorrect ? styles.isCorrect : styles.isIncorrect}
      >{`${answer} `}</span>
      <span>{` ${post} `}</span>
    </>
  );
};

TypeInExerciseResult.propTypes = {
  sentence: PropTypes.shape({
    pre: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
  }).isRequired,
  usersAnswer: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }).isRequired,
};

export default TypeInExerciseResult;
