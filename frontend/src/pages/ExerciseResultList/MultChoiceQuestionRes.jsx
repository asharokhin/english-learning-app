/* eslint-disable react/prop-types */
import React from "react";

const MultChoiceQuestionRes = ({ question, userAnswer }) => {
  return (
    <ol>
      {question.choices.map((c, i) => (
        <li key={c}>
          <p>{i === userAnswer.answer ? `${c} *` : c}</p>
        </li>
      ))}
    </ol>
  );
};

export default MultChoiceQuestionRes;
