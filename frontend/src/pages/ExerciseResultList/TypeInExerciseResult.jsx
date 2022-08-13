import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TypeInQuestionResult from "./TypeInQuestionResult";

const TypeInExerciseResult = ({ task, questions, usersAnswers }) => {
  return (
    <li>
      <span>{task}</span>
      <ol>
        {questions.map((q, i) => (
          <li key={q.answers}>
            <TypeInQuestionResult
              question={q}
              usersAnswers={usersAnswers}
              questionIndex={i}
            />
          </li>
        ))}
      </ol>
    </li>
  );
};

const mapStateToProps = (state, { exerciseIndex }) => {
  return {
    task: state.exercises[exerciseIndex].task,
    questions: state.exercises[exerciseIndex].questions,
    usersAnswers: state.usersAnswers[exerciseIndex],
  };
};

TypeInExerciseResult.propTypes = {
  task: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.string.isRequired),
      sentences: PropTypes.arrayOf(
        PropTypes.shape({
          pre: PropTypes.string.isRequired,
          post: PropTypes.string.isRequired,
          hint: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  usersAnswers: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    ).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(TypeInExerciseResult);
