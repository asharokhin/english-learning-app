import React from "react";
import PropTypes from "prop-types";

const TypeInParagraph = ({ pre, post, hint, name }) => {
  return (
    <>
      <span>{`${pre} `}</span>
      <input type="text" name={name} required />
      <em>{` (${hint}) `}</em>
      <span>{` ${post} `}</span>
    </>
  );
};

TypeInParagraph.propTypes = {
  pre: PropTypes.string,
  post: PropTypes.string,
  hint: PropTypes.string,
  name: PropTypes.string.isRequired,
};

TypeInParagraph.defaultProps = {
  pre: "",
  post: "",
  hint: "",
};

export default TypeInParagraph;
