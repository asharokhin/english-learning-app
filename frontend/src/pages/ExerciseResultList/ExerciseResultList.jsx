import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExerciseResults from "./ExerciseResults";

const ExerciseResultList = ({ exerciseTypes }) => {
  return (
    <>
      <h1>ExerciseResultList</h1>
      <p>All exercises are done.</p>
      {exerciseTypes.map((t, i) => (
        <ExerciseResults key={t} exerciseType={t} id={i} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  const exerciseTypes = state.exercises.map((t) => t.type);
  return { exerciseTypes };
};

ExerciseResultList.propTypes = {
  exerciseTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(ExerciseResultList);
