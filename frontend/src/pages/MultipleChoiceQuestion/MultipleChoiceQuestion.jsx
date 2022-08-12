import React from "react";
import PropTypes from "prop-types";
import AnswerOption from "./AnswerOption";

const MultipleChoiceQuestion = ({ content, onSubmitAnswer }) => {
  const processAnswer = (e) => {
    e.preventDefault();

    const usersAnswer = Number(e.target.selectedAnswer.value);

    const checkedAnswer = {
      answer: usersAnswer,
      isCorrect: usersAnswer === content.answer,
    };
    onSubmitAnswer(checkedAnswer);
  };

  return (
    <form onSubmit={processAnswer}>
      <ul>
        {content.choices.map((c, i) => (
          <AnswerOption key={c} answerContent={c} id={i} />
        ))}
      </ul>
      <button type="submit">Submit answer</button>
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
