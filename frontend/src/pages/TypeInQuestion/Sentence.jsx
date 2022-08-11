import React from "react";
import PropTypes from "prop-types";
// import { useDispatch } from "react-redux";

const Sentence = ({ pre, post, hint, name }) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <span>{`${pre} `}</span>
      <input type="text" name={name} required />
      <em>{` (${hint}) `}</em>
      <span>{` ${post}`}</span>
    </div>
  );
};

Sentence.propTypes = {
  pre: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // idx: PropTypes.number.isRequired,
};

export default Sentence;
