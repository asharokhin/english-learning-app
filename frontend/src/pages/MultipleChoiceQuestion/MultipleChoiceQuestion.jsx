import React from "react";
import PropTypes from "prop-types";
import AnswerOption from "./AnswerOption";

const MultipleChoiceQuestion = ({ content, onSubmitAnswer }) => {
  const processAnswer = (e) => {
    e.preventDefault();
    console.log(e.target);
    onSubmitAnswer();
  };

  return (
    <form onSubmit={processAnswer}>
      <ul>
        {content.choices.map((c) => (
          <AnswerOption key={c} answerContent={c} />
        ))}
      </ul>
      <button type="submit">Save answer</button>
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
