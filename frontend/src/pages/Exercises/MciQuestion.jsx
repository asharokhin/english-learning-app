import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MciQuestion.module.css";
import MciSentence from "./MciSentence";

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

  return (
    <form
      className={styles.radioToolbar}
      onSubmit={onSaveAnswer}
      onInvalid={() => setFormError(ERROR_TEXT)}
    >
      <MciSentence content={content} name="userChoice" id="radio" />

      <br />
      <p>{formError}</p>
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
