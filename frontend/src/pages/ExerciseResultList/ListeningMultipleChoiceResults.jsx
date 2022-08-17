/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import McAnswerOption from "./McAnswerOption";

const ListeningMultipleChoiceResults = ({ task, sentences, usersAnswers }) => {
  // Extract fo rendering answer options of each sentence
  const sentenceAnswerOptions = (sentence, sentenceIndex) => {
    const userAnswerIndex = usersAnswers[sentenceIndex].answer;
    const userAnswerIsCorrect = usersAnswers[sentenceIndex].isCorrect;

    const userAnswer = {
      answer: sentences[sentenceIndex].choices[userAnswerIndex],
      isCorrect: userAnswerIsCorrect,
    };

    return (
      <ol type="A">
        {sentence.choices.map((c) => (
          <li key={c}>
            <McAnswerOption optionText={c} userAnswer={userAnswer} />
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div>
      <p>{task}</p>
      <ol>
        {sentences.map((s, i) => (
          <li key={s.question}>
            <p>{s.question}</p>
            {sentenceAnswerOptions(s, i)}
          </li>
        ))}
      </ol>
    </div>
  );
};
const mapStateToProps = (state, { exerciseIndex }) => {
  return {
    usersAnswers: state.usersAnswers[exerciseIndex],
    task: state.exercises[exerciseIndex].task,
    sentences: state.exercises[exerciseIndex].questions[0].sentences,
  };
};

ListeningMultipleChoiceResults.propTypes = {
  sentences: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string,
      answerIndex: PropTypes.number,
      choices: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default connect(mapStateToProps)(ListeningMultipleChoiceResults);
