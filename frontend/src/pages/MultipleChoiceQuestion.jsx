import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const MultipleChoiceQuestion = ({ choices, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmitButton = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitButton)}>
      {choices.map((choice, index) => (
        <div key={choice}>
          <label htmlFor="radio-1">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("selectedAnswer")}
              type="radio"
              id={`radio${index}`}
              name="selectedAnswer"
              value={index}
            />
            {choice}
          </label>
        </div>
      ))}

      <button type="submit">Next</button>
    </form>
  );
};

MultipleChoiceQuestion.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MultipleChoiceQuestion;
