import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CtParagraph from "../Exercises/CtParagraph";

const CtResults = ({ usersAnswers, content }) => {
  const { paragraphs, textData } = content.questions[0];

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

  return (
    <div>
      <p>{content.task}</p>
      {textHeader()}
      {paragraphs.map((paragraph, i) => (
        <CtParagraph
          key={paragraph[0].answer}
          paragraph={paragraph}
          paragraphIdx={i}
          usersAnswers={usersAnswers}
        />
      ))}
      {textFooter()}
    </div>
  );
};

const mapStateToProps = (state, { exerciseIndex }) => {
  return {
    usersAnswers: state.usersAnswers[exerciseIndex],
    content: state.exercises[exerciseIndex],
  };
};

CtResults.propTypes = {
  content: PropTypes.shape({
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        paragraphs: PropTypes.arrayOf(PropTypes.shape),
        textData: PropTypes.shape({
          textType: PropTypes.string,
          greeting: PropTypes.string,
          end: PropTypes.string,
        }),
      }).isRequired
    ),
    task: PropTypes.string,
  }).isRequired,
  usersAnswers: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(CtResults);
