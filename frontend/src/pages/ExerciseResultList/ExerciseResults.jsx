import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceExerciseResults from "./MultipleChoiceExerciseResults";
import TypeInExerciseResults from "./TypeInExerciseResult";
import TypeInDialogueResults from "./TypeInDialogueResults";
import * as appConstants from "../../constants";

const ExerciseResults = ({ exerciseType, id }) => {
  switch (exerciseType) {
    case appConstants.MULTIPLE_CHOICE:
      return <MultipleChoiceExerciseResults exerciseIndex={id} />;
    case appConstants.TYPE_IN_SENTENCE:
      return <TypeInExerciseResults exerciseIndex={id} />;
    case appConstants.TYPE_IN_DIALOGUE:
      return <TypeInDialogueResults exerciseIndex={id} />;
    default:
      return null;
  }
};

ExerciseResults.propTypes = {
  exerciseType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ExerciseResults;
