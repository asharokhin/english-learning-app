import React from "react";
import PropTypes from "prop-types";
import TypeInSentenceResult from "./TypeInSentenceResult";

const TypeInDialogueQuestionResults = ({ lines, usersAnswers }) => {
  return (
    <li>
      {lines.map((l, i) => (
        <div key={l.character}>
          <b>{`${l.character}: `}</b>

          {l.sentences.map((s, j) => (
            <TypeInSentenceResult
              key={s.post}
              pre={s.pre}
              post={s.post}
              usersAnswer={usersAnswers[i][j]}
            />
          ))}
        </div>
      ))}
    </li>
  );
};

TypeInDialogueQuestionResults.propTypes = {
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
  usersAnswers: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        answer: PropTypes.string.isRequired,
        isCorrect: PropTypes.bool.isRequired,
      })
    )
  ).isRequired,
};

export default TypeInDialogueQuestionResults;
