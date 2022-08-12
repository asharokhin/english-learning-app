import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exercisesReducer";
import usersAnswerReducer from "./reducers/usersAnswersReducer";

export default configureStore({
  reducer: {
    exercises: exerciseReducer,
    usersAnswers: usersAnswerReducer,
  },
});
