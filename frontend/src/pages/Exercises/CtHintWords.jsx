/* eslint-disable react/prop-types */
import React from "react";

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

export default CtHintWords;
