import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Question from "./Question";

const Exercise = ({ ex, onSubmitAnswers }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [usersAnswers, setAnswers] = useState([]);

  useEffect(() => {
    // check whether last question has been answered and amount of answers equals amount of questions
    if (
      currentQuestionIdx === ex.questions.length - 1 &&
      usersAnswers.length === ex.questions.length
    ) {
      onSubmitAnswers(usersAnswers);
    }
  }, [usersAnswers]);

  const onSubmitQuestionAnswer = (submittedAnswer) => {
    setAnswers(usersAnswers.concat([submittedAnswer]));

    if (currentQuestionIdx < ex.questions.length - 1) {
      // show next question
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    }
  };

  return (
    <>
      {
        // Show amount of questions in exercise
        ex.questions.length > 1 ? (
          <p>
            Question {currentQuestionIdx + 1} out of {ex.questions.length}
          </p>
        ) : null
      }

      <Question
        key={currentQuestionIdx}
        questionType={ex.type}
        questionContent={ex.questions[currentQuestionIdx]}
        onSubmitQuestionAnswer={onSubmitQuestionAnswer}
      />
    </>
  );
};

Exercise.propTypes = {
  ex: PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.oneOfType([
        // multiple choice question
        PropTypes.shape({
          answer: PropTypes.number,
          choices: PropTypes.arrayOf(PropTypes.string),
        }),
        // type-in question
        PropTypes.shape({
          sentences: PropTypes.arrayOf(
            PropTypes.shape({
              pre: PropTypes.string,
              post: PropTypes.string,
              hint: PropTypes.string,
              answer: PropTypes.string,
            })
          ),
        }),
        PropTypes.arrayOf(PropTypes.shape),
      ])
    ),
  }).isRequired,
  onSubmitAnswers: PropTypes.func.isRequired,
};

export default Exercise;
