import React from "react";
import PropTypes from "prop-types";

const CtHintWords = ({ words }) => {
  return (
    <div>
      {words.map((w) => (
        <button key={w} type="button">
          {w}
        </button>
      ))}
    </div>
  );
};

CtHintWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CtHintWords;
