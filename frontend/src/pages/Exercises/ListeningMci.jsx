import React from "react";
import PropTypes from "prop-types";
import MciSentence from "./MciSentence";
import styles from "./MciQuestion.module.css";

const ListeningMci = ({ content, onSubmitAnswer }) => {
  const id = "1l1vdg2ICwT7N0ZxCD9T3O_vkYpJGmMq2";
  const source = `https://docs.google.com/uc?export=download&id=${id}`;
  const INPUT_BASE_NAME = "userChoice";

  const processAnswers = (e) => {
    e.preventDefault();

    const processedAnswers = [];
    for (let i = 0; i < content.length; i += 1) {
      const userAnswer = Number(e.target[`${INPUT_BASE_NAME}${i}`].value);

      processedAnswers.push({
        answer: userAnswer,
        isCorrect: userAnswer === content[i].answer,
      });
    }

    onSubmitAnswer(processedAnswers);
  };

  return (
    <div>
      <audio controls autoPlay muted>
        <source src={source} type="audio/mp3" />
      </audio>
      <form className={styles.radioToolbar} onSubmit={processAnswers}>
        <ol>
          {content.map((s, i) => (
            <li key={s.post}>
              <MciSentence
                content={s}
                name={`${INPUT_BASE_NAME}${i}`}
                id={`radio${i}`}
              />
            </li>
          ))}
        </ol>
        <button type="submit">Submit answers</button>
      </form>
    </div>
  );
};

ListeningMci.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      pre: PropTypes.string,
      choices: PropTypes.arrayOf(PropTypes.string),
      answer: PropTypes.number,
      post: PropTypes.string,
    })
  ).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default ListeningMci;
