import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExerciseResults from "./ExerciseResults";

const ExercisesResultList = ({ exerciseTypes }) => {
  return (
    <>
      <h1>Exercises Results</h1>
      <p>All exercises are done.</p>
      <ol>
        {exerciseTypes.map((t, i) => (
          <li key={t}>
            <ExerciseResults exerciseType={t} id={i} />
          </li>
        ))}
      </ol>
    </>
  );
};

const mapStateToProps = (state) => {
  const exerciseTypes = state.exercises.map((t) => t.type);
  return { exerciseTypes };
};

ExercisesResultList.propTypes = {
  exerciseTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExercisesResultList);
