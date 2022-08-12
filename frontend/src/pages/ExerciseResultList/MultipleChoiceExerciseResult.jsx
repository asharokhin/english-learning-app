import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MultChoiceQuestionRes from "./MultChoiceQuestionRes";

const MultipleChoiceExerciseResult = ({ task, questions, usersAnswers }) => {
  return (
    <>
      <div>{task}</div>
      <ol>
        {questions.map((q, i) => (
          <li key={q}>
            <MultChoiceQuestionRes question={q} userAnswer={usersAnswers[i]} />
          </li>
        ))}
      </ol>
    </>
  );
};

const mapStateToProps = (state, { exerciseIndex }) => {
  return {
    task: state.exercises[exerciseIndex].task,
    questions: state.exercises[exerciseIndex].questions,
    usersAnswers: state.usersAnswers[exerciseIndex],
  };
};

MultipleChoiceExerciseResult.propTypes = {
  // exerciseIndex: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.number.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  usersAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.number.isRequired,
      isCorrect: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default connect(mapStateToProps)(MultipleChoiceExerciseResult);
