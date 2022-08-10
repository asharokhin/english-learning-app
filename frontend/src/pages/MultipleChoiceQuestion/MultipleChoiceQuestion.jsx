import React from "react";
import PropTypes from "prop-types";
import AnswerOption from "./AnswerOption";

const MultipleChoiceQuestion = ({ choices }) => {
  return (
    <ul>
      {choices.map((c) => (
        <AnswerOption key={c} answerContent={c} />
      ))}
    </ul>
  );
};

MultipleChoiceQuestion.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MultipleChoiceQuestion;
