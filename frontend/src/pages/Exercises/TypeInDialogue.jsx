import React from "react";
import PropTypes from "prop-types";
import TypeInParagraph from "./TypeInQuestion/TypeInParagraph";

const TypeInDialogue = ({ content, onSubmitAnswer }) => {
  const { lines } = content;
  const onInputsSubmitted = (e) => {
    e.preventDefault();
    const checkedAnswers = [];
    const amountLines = content.lines.length; // amount of dialogue lines

    for (let i = 0; i < amountLines; i += 1) {
      const amountSentences = content.lines[i].sentences.length; // amount sentences in line
      checkedAnswers.push([]); // array for each dialogue line's answers
      for (let j = 0; j < amountSentences; j += 1) {
        // get user input for each sentence
        const usersAnswer = e.target[`input${i}${j}`].value;
        // save user's input
        checkedAnswers[i][j] = {
          answer: usersAnswer,
          isCorrect: usersAnswer === content.lines[i].sentences[j].answer,
        };
      }
    }
    onSubmitAnswer(checkedAnswers);
  };

  return (
    <form onSubmit={onInputsSubmitted}>
      <div>
        {lines.map((l, i) => (
          <div key={l.character}>
            <b>{`${l.character}: `}</b>

            {l.sentences.map((s, j) => (
              <TypeInParagraph
                pre={s.pre}
                hint={s.hint}
                post={s.post}
                name={`input${i}${j}`}
                key={s.hint}
              />
            ))}
          </div>
        ))}
      </div>
      <button type="submit">Submit answer</button>
    </form>
  );
};

TypeInDialogue.propTypes = {
  content: PropTypes.shape({
    lines: PropTypes.arrayOf(
      PropTypes.shape({
        character: PropTypes.string.isRequired,
        sentences: PropTypes.arrayOf(
          PropTypes.shape({
            pre: PropTypes.string,
            post: PropTypes.string,
            hint: PropTypes.string,
            answer: PropTypes.string,
          })
        ),
      })
    ).isRequired,
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default TypeInDialogue;
