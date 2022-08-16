import React from "react";
import PropTypes from "prop-types";
import styles from "./MciUserAnswer.module.css";

const MciUserAnswer = ({ userAnswer, answer }) => {
  if (userAnswer === answer) {
    return <span className={styles.isCorrect}>{userAnswer}</span>;
  }
  return (
    <span className={styles.tooltip}>
      <span className={styles.isIncorrect}>{` ${userAnswer} `}</span>
      <span className={styles.tooltiptext}>{answer}</span>
    </span>
  );
};

MciUserAnswer.propTypes = {
  userAnswer: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default MciUserAnswer;
