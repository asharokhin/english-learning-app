import React from "react";
import PropTypes from "prop-types";

const MciSentence = ({ content, name, id }) => {
  const { pre, choices, post } = content;
  return (
    <>
      <span>{` ${pre} `}</span>

      <input type="radio" name={name} id={`${id}${0}`} value={0} />
      <label htmlFor={`${id}${0}`}>
        <i>{choices[0]}</i>
      </label>

      <span>{` / `}</span>

      <input type="radio" name={name} id={`${id}${1}`} value={1} />
      <label htmlFor={`${id}${1}`}>
        <i>{choices[1]}</i>
      </label>

      <span>{` ${post} `}</span>
    </>
  );
};

MciSentence.propTypes = {
  content: PropTypes.shape({
    pre: PropTypes.string,
    choices: PropTypes.arrayOf(PropTypes.string),
    post: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MciSentence;
