import React from "react";
import PropTypes from "prop-types";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion/MultipleChoiceQuestion";
import TypeInQuestion from "./TypeInQuestion/TypeInQuestion";
import TypeInDialogue from "./TypeInDialogue";
import * as appConstants from "../../constants";

const Question = ({
  questionType,
  questionContent,
  onSubmitQuestionAnswer,
}) => {
  switch (questionType) {
    case appConstants.MULTIPLE_CHOICE:
      return (
        <MultipleChoiceQuestion
          content={questionContent}
          onSubmitAnswer={onSubmitQuestionAnswer}
        />
      );
    case appConstants.TYPE_IN_SENTENCE:
      return (
        <TypeInQuestion
          content={questionContent}
          onSubmitAnswer={onSubmitQuestionAnswer}
        />
      );
    case appConstants.TYPE_IN_DIALOGUE:
      return (
        <TypeInDialogue
          content={questionContent}
          onSubmitAnswer={onSubmitQuestionAnswer}
        />
      );
    default:
      return null;
  }
};

Question.propTypes = {
  questionType: PropTypes.string.isRequired,
  questionContent: PropTypes.oneOfType([
    PropTypes.shape({
      answer: PropTypes.number,
      choices: PropTypes.arrayOf(PropTypes.string),
    }),
    PropTypes.shape({
      answers: PropTypes.arrayOf(PropTypes.string),
      sentences: PropTypes.arrayOf(
        PropTypes.shape({
          pre: PropTypes.string,
          post: PropTypes.string,
          hint: PropTypes.string,
          answer: PropTypes.string,
        })
      ),
    }),
  ]).isRequired,
  onSubmitQuestionAnswer: PropTypes.func.isRequired,
};

export default Question;