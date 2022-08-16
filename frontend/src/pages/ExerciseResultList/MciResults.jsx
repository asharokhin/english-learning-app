import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MciUserAnswer from "./MciUserAnswer";

const MciResults = ({ usersAnswers, content }) => {
  const { questions, task } = content;

  return (
    <div>
      <p>{task}</p>
      <ol>
        {
          // list of questions with user answers
          questions.map((q, i) => (
            <li key={q.post}>
              <p>
                <span>{` ${q.pre} `}</span>

                <MciUserAnswer
                  userAnswer={q.choices[usersAnswers[i].answer]}
                  answer={q.choices[q.answer]}
                />

                <span>{` ${q.post} `}</span>
              </p>
            </li>
          ))
        }
      </ol>
    </div>
  );
};

const mapStateToProps = (state, { exerciseIndex }) => {
  return {
    usersAnswers: state.usersAnswers[exerciseIndex],
    content: state.exercises[exerciseIndex],
  };
};

MciResults.propTypes = {
  content: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        pre: PropTypes.string,
        choices: PropTypes.arrayOf(PropTypes.string),
        answer: PropTypes.number,
        post: PropTypes.string,
      })
    ),
    task: PropTypes.string.isRequired,
  }).isRequired,
  usersAnswers: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(MciResults);

/*
<span className={styles.tooltip}>
                  <span
                    className={
                      usersAnswers[i].isCorrect
                        ? styles.isCorrect
                        : styles.isIncorrect
                    }
                  >{` ${q.choices[usersAnswers[i].answer]} `}</span>
                  <span className={styles.tooltiptext}>
                    {q.choices[q.answer]}
                  </span>
                </span>
*/
