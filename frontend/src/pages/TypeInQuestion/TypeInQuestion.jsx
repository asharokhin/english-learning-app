import React from "react";
import PropTypes from "prop-types";

import Sentence from "./Sentence";

const TypeInQuestion = ({ content, onSubmitAnswer }) => {
  const onInputChanged = (e) => {
    e.preventDefault();
    console.log(e.target.field0.value);
    onSubmitAnswer();
  };

  return (
    <form onSubmit={onInputChanged}>
      {content.sentences.map((s, i) => (
        <Sentence
          key={s.hint}
          pre={s.pre}
          hint={s.hint}
          post={s.post}
          name={`field${i}`}
        />
      ))}

      <button type="submit">submit</button>
    </form>
  );
};

TypeInQuestion.propTypes = {
  content: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.string),
    sentences: PropTypes.arrayOf(
      PropTypes.shape({
        pre: PropTypes.string,
        post: PropTypes.string,
        hint: PropTypes.string,
      })
    ),
  }).isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
};

export default TypeInQuestion;
