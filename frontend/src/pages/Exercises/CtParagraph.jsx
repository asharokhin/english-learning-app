import React from "react";
import PropTypes from "prop-types";
import CtSentence from "./CtSentence";

const CtParagraph = ({ paragraph, paragraphIdx, usersAnswers }) => {
  return (
    <p>
      {paragraph.map((s, i) => (
        <CtSentence
          key={s.answer}
          pre={s.pre}
          post={s.post}
          inputNumber={s.num}
          inputName={`input${paragraphIdx}${i}`}
          usersAnswer={
            usersAnswers ? usersAnswers[Number(s.num) - 1] : usersAnswers
          }
        />
      ))}
    </p>
  );
};

CtParagraph.propTypes = {
  paragraph: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  paragraphIdx: PropTypes.number.isRequired,
  usersAnswers: PropTypes.arrayOf(PropTypes.shape),
};

CtParagraph.defaultProps = {
  usersAnswers: undefined,
};

export default CtParagraph;
