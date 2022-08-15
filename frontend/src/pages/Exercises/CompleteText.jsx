import React from "react";
import PropTypes from "prop-types";
import CtHintWords from "./CtHintWords";
import CtParagraph from "./CtParagraph";

const CompleteText = ({ content, onSubmitAnswer, usersAnswers }) => {
  const { paragraphs, textData } = content;

  const exerciseHints = () => {
    if (usersAnswers === undefined) {
      return <CtHintWords words={content.words} />;
    }
    return null;
  };

  const textHeader = () => {
    if (textData.textType === "email") {
      return <p>{`${textData.greeting},`}</p>;
    }
    return <b>{`${textData.greeting},`}</b>;
  };

  const textFooter = () => {
    if (usersAnswers !== undefined) {
      return null;
    }
    if (textData.end !== undefined) {
      return <p>{`${textData.end}`}</p>;
    }
    return null;
  };
  const onSubmitUsersAnswers = (e) => {
    e.preventDefault();
    console.log("submit", e.target.input00.value);
  };

  return (
    <div>
      {exerciseHints()}
      {textHeader()}
      <form onSubmit={onSubmitUsersAnswers}>
        {paragraphs.map((paragraph, i) => (
          <CtParagraph
            key={paragraph[0].answer}
            paragraph={paragraph}
            onSubmitAnswer={onSubmitAnswer}
            paragraphIdx={i}
            usersAnswers={usersAnswers}
          />
        ))}
        {textFooter()}
        <button type="submit">Submit answers</button>
      </form>
    </div>
  );
};

CompleteText.propTypes = {
  content: PropTypes.shape({
    paragraphs: PropTypes.arrayOf(PropTypes.shape),
    textData: PropTypes.shape({
      textType: PropTypes.string,
      greeting: PropTypes.string,
      end: PropTypes.string,
    }),
    words: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onSubmitAnswer: PropTypes.func,
  usersAnswers: PropTypes.shape(),
};

CompleteText.defaultProps = {
  onSubmitAnswer: undefined,
  usersAnswers: undefined,
};

export default CompleteText;
