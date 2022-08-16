import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MciQuestion.module.css";

const MciQuestion = ({ content, onSubmitAnswer }) => {
  const [formError, setFormError] = useState(null);

  const ERROR_TEXT = "Please select your answer.";

  const onSaveAnswer = (e) => {
    e.preventDefault();
    onSubmitAnswer({
      answer: Number(e.target.userChoice.value),
      isCorrect: Number(e.target.userChoice.value) === content.answer,
    });
  };

  const { pre, choices, post } = content;
  return (
    <form
      className={styles.radioToolbar}
      onSubmit={onSaveAnswer}
      onInvalid={() => setFormError(ERROR_TEXT)}
    >
      <span>{` ${pre} `}</span>

      <input type="radio" name="userChoice" id="radio0" value={0} required />
      <label htmlFor="radio0">
        <i>{choices[0]}</i>
      </label>

      <span>{` / `}</span>

      <input type="radio" name="userChoice" id="radio1" value={1} required />
      <label htmlFor="radio1">
        <i>{choices[1]}</i>
      </label>
      <span>{` ${post} `}</span>
      <p>{formError}</p>

      <br />

      <button type="submit">Answer</button>
    </form>
  );
};

MciQuestion.propTypes = {
  content: PropTypes.shape({
    pre: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.string),
    answer: PropTypes.number,
    post: PropTypes.string,
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default MciQuestion;
