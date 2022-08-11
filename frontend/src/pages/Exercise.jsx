/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Question from "./Question";
// import { saveAnswer } from "../reducers/exerciseReducer";

const Exercise = ({ ex, onSubmitAnswers }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers] = useState([]);
  // if (ex === undefined) {
  //   return null;
  // }

  // const dispatch = useDispatch();

  useEffect(() => {
    if (currentQuestionIdx >= ex.questions.length) {
      onSubmitAnswers(answers);
      setCurrentQuestionIdx(undefined);
    }
  }, [answers]);

  // const parseTypeInAnswer = (userAnswer) => {
  //   const userAnswersArray = Object.values(userAnswer);
  //   const result = [];
  //   for (let i = 0; i < userAnswersArray.length; i += 1) {
  //     result[i] = {
  //       answer: userAnswersArray[i],
  //       isCorrect:
  //         userAnswersArray[i] === ex.questions[currentQuestionIdx].answers[i],
  //     };
  //   }
  //   return result;
  // };

  // const checkAnswer = (userAnswer) => {
  //   console.log(userAnswer);
  //   // const currExerciseType = ex.type;
  //   // switch (currExerciseType) {
  //   //   case MULTIPLE_CHOICE:
  //   //     return {
  //   //       answer: userAnswer,
  //   //       isCorrect: userAnswer === ex.questions[currentQuestionIdx].answer,
  //   //     };
  //   //   case TYPE_IN_SENTENCE:
  //   //     return parseTypeInAnswer(userAnswer);
  //   //   default:
  //   //     return null;
  //   // }
  // };

  const onSubmitQuestionAnswer = () => {
    console.log("submit");
    // const userAnswer = "";
    // const checkedAnswer = checkAnswer(userAnswer);
    // if (ex.type === TYPE_IN_SENTENCE) {
    //   setAnswers(answers.concat([checkedAnswer]));
    // } else {
    //   setAnswers(answers.concat(checkedAnswer));
    // }
    if (currentQuestionIdx < ex.questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      onSubmitAnswers();
    }
  };

  // const exerciseHead = () => {
  //   return (
  //     <>
  //       <p>
  //         Question {currentQuestionIdx + 1} out of {ex.questions.length}
  //       </p>
  //       {ex.task}
  //       <br />
  //     </>
  //   );
  // };

  return (
    <>
      <h1>Exercise</h1>
      <Question
        questionType={ex.type}
        questionContent={ex.questions[currentQuestionIdx]}
        onSubmitQuestionAnswer={onSubmitQuestionAnswer}
      />
      <button type="button" onClick={onSubmitQuestionAnswer}>
        Button answer
      </button>
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
        PropTypes.shape({
          answer: PropTypes.number,
          choices: PropTypes.arrayOf(PropTypes.string),
        }),
        PropTypes.shape({
          answers: PropTypes.arrayOf(PropTypes.string),
          sentences: PropTypes.arrayOf(
            PropTypes.shape({
              pre: PropTypes.string,
              post: PropTypes.string,
              hint: PropTypes.string,
            })
          ),
        }),
      ])
    ),
  }).isRequired,
  onSubmitAnswers: PropTypes.func.isRequired,
};

export default Exercise;
