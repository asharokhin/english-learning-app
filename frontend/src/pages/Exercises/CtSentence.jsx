/* eslint-disable react/prop-types */
import React from "react";

const CtSentence = ({ pre, num, post, inputName }) => {
  return (
    <>
      <span>{` ${pre} `}</span>
      <b>{` (${num}) `} </b>
      <input name={inputName} type="text" />
      <span>{` ${post} `}</span>
    </>
  );
};

export default CtSentence;
