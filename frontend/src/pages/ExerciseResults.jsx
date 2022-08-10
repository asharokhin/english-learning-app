import React from "react";

// eslint-disable-next-line react/prop-types
const ExerciseResults = ({ results }) => {
  console.log("results", results);
  return (
    <>
      <h1>ExerciseResults</h1>
      <p>All exercises are done.</p>
    </>
  );
};

/*
ExerciseResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.shape({
          answer: PropTypes.number,
          isCorrect: PropTypes.bool,
        })
      )
    )
  ).isRequired,
};
*/

export default ExerciseResults;
