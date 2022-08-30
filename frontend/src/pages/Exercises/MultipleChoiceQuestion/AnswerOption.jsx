import React from "react";
import PropTypes from "prop-types";
import styles from "./MultipleChoiceQuestion.module.css";

const AnswerOption = ({ answerContent, id, required, answerMark }) => {
  const disabled = !required;

  const showAnswerMark = () => (
    <div className={answerMark ? styles["tick-mark"] : styles["cross-mark"]} />
  );
  return (
    <li className={styles["question-list-item"]}>
      <label htmlFor={answerContent}>
        <input
          className={styles["answer-option"]}
          type="radio"
          name="selectedAnswer"
          id={answerContent}
          value={id}
          required={required}
          disabled={disabled}
        />
        {answerContent}
        {answerMark !== undefined ? showAnswerMark() : null}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  required: PropTypes.bool.isRequired,
  answerMark: PropTypes.bool,
};
AnswerOption.defaultProps = {
  answerMark: undefined,
};

export default AnswerOption;
