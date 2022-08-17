import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TypeInDialogueQuestionResults from "./TypeInDialogueQuestionResults";

const TypeInDialogueResults = ({ questions, task, usersAnswers }) => {
  return (
    <>
      <span>{task}</span>
      <ol>
        {questions.map((q, i) => (
          <TypeInDialogueQuestionResults
            key={usersAnswers[i]}
            lines={q.lines}
            usersAnswers={usersAnswers[i]}
          />
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

TypeInDialogueResults.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          character: PropTypes.string.isRequired,
          sentences: PropTypes.arrayOf(
            PropTypes.shape({
              pre: PropTypes.string,
              post: PropTypes.string,
              hint: PropTypes.string,
            })
          ).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  task: PropTypes.string.isRequired,
  usersAnswers: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.string.isRequired,
          isCorrect: PropTypes.bool.isRequired,
        })
      )
    )
  ).isRequired,
};

export default connect(mapStateToProps)(TypeInDialogueResults);
