import React from "react";
import PropTypes from "prop-types";

const AnswerOption = ({ answerContent, id }) => {
  return (
    <li>
      <label htmlFor="radio">
        <input type="radio" id={id} name="selectedAnswer" value={id} required />
        {answerContent}
      </label>
    </li>
  );
};

AnswerOption.propTypes = {
  answerContent: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default AnswerOption;
