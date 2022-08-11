import { configureStore } from "@reduxjs/toolkit";
import exerciseReducer from "./reducers/exerciseReducer";

export default configureStore({
  reducer: {
    exercise: exerciseReducer,
  },
});
