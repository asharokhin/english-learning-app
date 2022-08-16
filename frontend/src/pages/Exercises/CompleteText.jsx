import React from "react";
import PropTypes from "prop-types";
import CtHintWords from "./CtHintWords";
import CtParagraph from "./CtParagraph";

const CompleteText = ({ content, onSubmitAnswer }) => {
  const { paragraphs, textData } = content;

  const textHeader = () => {
    if (textData.textType === "email") {
      return <p>{`${textData.greeting},`}</p>;
    }
    return <b>{`${textData.greeting},`}</b>;
  };

  const textFooter = () => {
    if (textData.end !== undefined) {
      return <p>{`${textData.end}`}</p>;
    }
    return null;
  };
  const onSubmitUsersAnswers = (e) => {
    e.preventDefault();

    // compare user's answers in inputs with exercise answers
    const checkedAnswers = [];
    for (let i = 0; i < paragraphs.length; i += 1) {
      const sentences = paragraphs[i];
      for (let j = 0; j < sentences.length; j += 1) {
        const usersAnswer = e.target[`input${i}${j}`].value;
        checkedAnswers.push({
          answer: usersAnswer,
          isCorrect: usersAnswer === paragraphs[i][j].answer,
        });
      }
    }

    onSubmitAnswer(checkedAnswers);
  };

  return (
    <div>
      <CtHintWords words={content.words} />
      {textHeader()}
      <form onSubmit={onSubmitUsersAnswers}>
        {paragraphs.map((paragraph, i) => (
          <CtParagraph
            key={paragraph[0].answer}
            paragraph={paragraph}
            paragraphIdx={i}
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
};

CompleteText.defaultProps = {
  onSubmitAnswer: undefined,
};

export default CompleteText;
