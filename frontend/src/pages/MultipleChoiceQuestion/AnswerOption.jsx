import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({ answerContent }) => {
  return (
    <li>
      <label htmlFor="radio">
        <input type="radio" id="radio" name="selectedAnswer" required />
        {answerContent}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
};

export default AnswerOption;
