/* eslint-disable react/prop-types */
import React from "react";
import TypeInSentenceResult from "./TypeInSentenceResult";

const TypeInDialogueLine = ({ lines, usersAnswers }) => {
  return (
    <div>
      {lines.map((l, i) => (
        <div key={l.character}>
          <b>{`${l.character}: `}</b>

          {l.sentences.map((s, j) => (
            <TypeInSentenceResult
              key={s.post}
              sentence={s}
              usersAnswer={usersAnswers[i][j]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TypeInDialogueLine;
