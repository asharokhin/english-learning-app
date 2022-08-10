import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion/MultipleChoiceQuestion";
import TypeInSentence from "./TypeInSentence/TypeInSentence";

const TYPE_IN_SENTENCE = "type_in_sentence";
const MULTIPLE_CHOICE = "multiple_choice";

const Exercise = ({ ex, onSubmitAnswers }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState([]);
  if (ex === undefined) {
    return null;
  }

  useEffect(() => {
    if (currentQuestionIdx >= ex.questions.length) {
      onSubmitAnswers(answers);
      setCurrentQuestionIdx(undefined);
    }
  }, [answers]);

  const parseTypeInAnswer = (userAnswer) => {
    const userAnswersArray = Object.values(userAnswer);
    const result = [];
    for (let i = 0; i < userAnswersArray.length; i += 1) {
      result[i] = {
        answer: userAnswersArray[i],
        isCorrect:
          userAnswersArray[i] === ex.questions[currentQuestionIdx].answers[i],
      };
    }
    return result;
  };

  const checkAnswer = (userAnswer) => {
    const currExerciseType = ex.type;
    switch (currExerciseType) {
      case MULTIPLE_CHOICE:
        return {
          answer: userAnswer,
          isCorrect: userAnswer === ex.questions[currentQuestionIdx].answer,
        };
      case TYPE_IN_SENTENCE:
        return parseTypeInAnswer(userAnswer);
      default:
        return null;
    }
  };

  const onSubmitQuestionAnswer = () => {
    const userAnswer = "";
    const checkedAnswer = checkAnswer(userAnswer);

    if (ex.type === TYPE_IN_SENTENCE) {
      setAnswers(answers.concat([checkedAnswer]));
    } else {
      setAnswers(answers.concat(checkedAnswer));
    }
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const exerciseHead = () => {
    return (
      <>
        <p>
          Question {currentQuestionIdx + 1} out of {ex.questions.length}
        </p>
        {ex.task}
        <br />
      </>
    );
  };
  const showQuestion = () => {
    if (
      currentQuestionIdx === undefined ||
      currentQuestionIdx === ex.questions.length
    ) {
      return null;
    }

    const currExerciseType = ex.type;

    switch (currExerciseType) {
      case MULTIPLE_CHOICE:
        return (
          <>
            {exerciseHead()}
            <MultipleChoiceQuestion
              choices={ex.questions[currentQuestionIdx].choices}
              onSubmit={onSubmitQuestionAnswer}
            />
          </>
        );
      case TYPE_IN_SENTENCE:
        return (
          <>
            {exerciseHead()}
            <TypeInSentence
              sentences={ex.questions[currentQuestionIdx].sentences}
              onSubmit={onSubmitQuestionAnswer}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <h1>Question</h1>
      {showQuestion()}
      <button type="button" onClick={onSubmitQuestionAnswer}>
        Submit answer
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
      PropTypes.shape({
        choices: PropTypes.arrayOf(PropTypes.string),
        answer: PropTypes.number,
        sentences: PropTypes.arrayOf(
          PropTypes.shape({
            pre: PropTypes.string.isRequired,
            post: PropTypes.string.isRequired,
            hint: PropTypes.string.isRequired,
          })
        ),
        answers: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  onSubmitAnswers: PropTypes.func.isRequired,
};

export default Exercise;
