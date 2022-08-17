import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./MciQuestion.module.css";

const ListeningMultipleChoice = ({ content, onSubmitAnswer }) => {
  const { sentences } = content;
  const [formError, setFormError] = useState(null);

  const ERROR_TEXT = "Please select answer for each question.";
  const id = "1l1vdg2ICwT7N0ZxCD9T3O_vkYpJGmMq2";
  const source = `https://docs.google.com/uc?export=download&id=${id}`;

  const processAnswer = (e) => {
    e.preventDefault();
    // compare user's answers in inputs with exercise answers
    const checkedAnswers = [];
    for (let i = 0; i < sentences.length; i += 1) {
      const sentence = sentences[i];
      const usersAnswer = Number(e.target[`input${i}`].value);
      checkedAnswers.push({
        answer: usersAnswer,
        isCorrect: usersAnswer === sentence.answerIndex,
      });
    }

    onSubmitAnswer(checkedAnswers);
  };

  // Extract fo rendering answer options of each sentence
  const sentenceAnswerOptions = (sentence, sentenceIndex) => {
    return (
      <ol type="A">
        {sentence.choices.map((c, choiceIndex) => (
          <li key={c}>
            <input
              key={c}
              type="radio"
              id={`choice${sentenceIndex}${choiceIndex}`}
              name={`input${sentenceIndex}`}
              value={choiceIndex}
              required
            />
            <label htmlFor={`choice${sentenceIndex}${choiceIndex}`}>{c}</label>
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div>
      <audio controls autoPlay muted>
        <source src={source} type="audio/mp3" />
      </audio>

      <form
        className={styles.radioToolbar}
        onSubmit={processAnswer}
        onInvalid={() => setFormError(ERROR_TEXT)}
      >
        <ol>
          {sentences.map((s, i) => (
            <li key={s.question}>
              <p>{s.question}</p>
              {sentenceAnswerOptions(s, i)}
            </li>
          ))}
        </ol>

        <p>{formError}</p>

        <button type="submit">Submit answers</button>
      </form>
    </div>
  );
};

ListeningMultipleChoice.propTypes = {
  content: PropTypes.shape({
    sentences: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string,
        answerIndex: PropTypes.number,
        choices: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default ListeningMultipleChoice;
