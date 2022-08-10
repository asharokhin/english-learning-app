import React from "react";
import PropTypes from "prop-types";

const Sentence = ({ pre, post, hint }) => {
  return (
    <div>
      <span>{`${pre} `}</span>
      <input />
      <em>{` (${hint}) `}</em>
      <span>{` ${post}`}</span>
    </div>
  );
};

Sentence.propTypes = {
  pre: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default Sentence;
