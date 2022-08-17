import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceExerciseResults from "./MultipleChoiceExerciseResults";
import TypeInExerciseResults from "./TypeInExerciseResult";
import TypeInDialogueResults from "./TypeInDialogueResults";
import * as appConstants from "../../constants";
import CtResults from "./CtResults";
import MciResults from "./MciResults";
import ListeningMultipleChoiceResults from "./ListeningMultipleChoiceResults";

const ExerciseResults = ({ exerciseType, id }) => {
  switch (exerciseType) {
    case appConstants.MULTIPLE_CHOICE:
      return <MultipleChoiceExerciseResults exerciseIndex={id} />;
    case appConstants.TYPE_IN_SENTENCE:
      return <TypeInExerciseResults exerciseIndex={id} />;
    case appConstants.TYPE_IN_DIALOGUE:
      return <TypeInDialogueResults exerciseIndex={id} />;
    case appConstants.COMPLETE_THE_TEXT:
      return <CtResults exerciseIndex={id} />;
    case appConstants.MULTIPLE_CHOICE_INLINE:
      return <MciResults exerciseIndex={id} />;
    case appConstants.LISTENING_MULTIPLE_CHOICE:
      return <ListeningMultipleChoiceResults exerciseIndex={id} />;
    default:
      return null;
  }
};

ExerciseResults.propTypes = {
  exerciseType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ExerciseResults;
