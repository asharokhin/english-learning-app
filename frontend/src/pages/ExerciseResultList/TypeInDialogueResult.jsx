import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TypeInDialogueLine from "./TypeInDialogueLine";

const TypeInDialogueResult = ({ questions, task, usersAnswers }) => {
  console.log(questions);

  return (
    <li>
      <span>{task}</span>
      <ol>
        {questions.map((q, i) => (
          <TypeInDialogueLine
            key={q.lines[0].character}
            lines={q.lines}
            usersAnswers={usersAnswers[i]}
          />
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

TypeInDialogueResult.propTypes = {
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

export default connect(mapStateToProps)(TypeInDialogueResult);
/*
{questions.map((q, i) => (
          <li key={q.sentences}>
            <TypeInQuestionResult
              question={q}
              usersAnswers={usersAnswers}
              questionIndex={i}
            />
          </li>
        ))}
*/
