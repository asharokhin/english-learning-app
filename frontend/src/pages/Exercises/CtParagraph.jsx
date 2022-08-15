/* eslint-disable react/prop-types */
import React from "react";
import CtSentence from "./CtSentence";

const CtParagraph = ({ paragraph, paragraphIdx }) => {
  return (
    <p>
      {paragraph.map((s, i) => (
        <CtSentence
          key={s.answer}
          pre={s.pre}
          post={s.post}
          num={s.num}
          inputName={`input${paragraphIdx}${i}`}
        />
      ))}
    </p>
  );
};

export default CtParagraph;
