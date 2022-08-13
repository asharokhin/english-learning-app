import React from "react";
import PropTypes from "prop-types";
import MultipleChoiceExerciseResult from "./MultipleChoiceExerciseResult";
import TypeInExerciseResult from "./TypeInExerciseResult";

const ExerciseResults = ({ exerciseType, id }) => {
  switch (exerciseType) {
    case "multiple_choice":
      return <MultipleChoiceExerciseResult exerciseIndex={id} />;
    case "type_in_sentence":
      return <TypeInExerciseResult exerciseIndex={id} />;
    default:
      return null;
  }
};

ExerciseResults.propTypes = {
  exerciseType: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ExerciseResults;
