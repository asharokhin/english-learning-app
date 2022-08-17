/* eslint-disable react/prop-types */
import React from "react";

const McAnswerOption = ({ optionText, userAnswer }) => {
  const { answer, isCorrect } = userAnswer;
  if (optionText === answer) {
    if (isCorrect === true) {
      return <div>{`${optionText} +`}</div>;
    }
    return <div>{`${optionText} -`}</div>;
  }
  return <div>{`${optionText}`}</div>;
};

export default McAnswerOption;
