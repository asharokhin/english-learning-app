/* eslint-disable react/prop-types */
import React from "react";

const MciSentence = ({ content, name, id }) => {
  const { pre, choices, post } = content;
  return (
    <>
      <span>{` ${pre} `}</span>

      <input type="radio" name={name} id={`${id}${0}`} value={0} required />
      <label htmlFor={`${id}${0}`}>
        <i>{choices[0]}</i>
      </label>

      <span>{` / `}</span>

      <input type="radio" name={name} id={`${id}${1}`} value={1} required />
      <label htmlFor={`${id}${1}`}>
        <i>{choices[1]}</i>
      </label>

      <span>{` ${post} `}</span>
    </>
  );
};

export default MciSentence;
