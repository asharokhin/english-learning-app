import React from "react";
import PropTypes from "prop-types";

const TypeInParagraph = ({ pre, post, hint, name }) => {
  return (
    <>
      <span>{`${pre} `}</span>
      <input type="text" name={name} required />
      <em>{` (${hint}) `}</em>
      <span>{` ${post}`}</span>
    </>
  );
};

TypeInParagraph.propTypes = {
  pre: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TypeInParagraph;
