import React from "react";
import PropTypes from "prop-types";

import Sentence from "./Sentence";

const TypeInSentence = ({ sentences }) => {
  return (
    <form>
      <div>
        {sentences.map((s) => (
          <Sentence pre={s.pre} hint={s.hint} post={s.post} key={s.hint} />
        ))}
      </div>
    </form>
  );
};

TypeInSentence.propTypes = {
  sentences: PropTypes.arrayOf(
    PropTypes.shape({
      pre: PropTypes.string.isRequired,
      post: PropTypes.string.isRequired,
      hint: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TypeInSentence;
