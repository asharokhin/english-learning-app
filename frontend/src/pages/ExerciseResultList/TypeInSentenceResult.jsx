import React from "react";
import PropTypes from "prop-types";
import styles from "./TypeInSentenceResult.module.css";

const TypeInSentenceResult = ({ pre, post, usersAnswer }) => {
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

TypeInSentenceResult.propTypes = {
  pre: PropTypes.string,
  post: PropTypes.string,
  usersAnswer: PropTypes.shape({
    answer: PropTypes.string.isRequired,
    isCorrect: PropTypes.bool.isRequired,
  }).isRequired,
};

TypeInSentenceResult.defaultProps = {
  pre: "",
  post: "",
};

export default TypeInSentenceResult;
