import React, { useState } from "react";
import PropTypes from "prop-types";
import AnswerOption from "./AnswerOption";
import styles from "./MultipleChoiceQuestion.module.css";

const MultipleChoiceQuestion = ({ content, onSubmitAnswer }) => {
  const [submitBtnText, setSubmitBtnText] = useState("Submit");
  const [usersAnswer, setUsersAnswer] = useState(undefined);

  const processSubmit = (e) => {
    e.preventDefault();
    if (usersAnswer !== undefined) {
      onSubmitAnswer("");
    } else {
      setUsersAnswer({
        answer: Number(e.target.selectedAnswer.value),
        isCorrect: Number(e.target.selectedAnswer.value) === content.answer,
      });
      setSubmitBtnText("Next >");
    }
  };

  return (
    <form onSubmit={processSubmit}>
      <ul className={styles["question-list"]}>
        {content.choices.map((c, i) => {
          let answerMark;
          if (usersAnswer && usersAnswer.answer === i) {
            answerMark = usersAnswer.isCorrect;
          }
          return (
            <AnswerOption
              key={c}
              answerContent={c}
              id={i}
              required={usersAnswer === undefined}
              answerMark={answerMark}
            />
          );
        })}
      </ul>
      <div className={styles["submit-container"]}>
        <button type="submit" className={styles["button-ex"]}>
          {submitBtnText}
        </button>
      </div>
    </form>
  );
};

MultipleChoiceQuestion.propTypes = {
  content: PropTypes.shape({
    answer: PropTypes.number,
    choices: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestion;
