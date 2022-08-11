import { createSlice } from "@reduxjs/toolkit";

const exerciseSlice = createSlice({
  name: "exercise",
  initialState: "hello",
  reducers: {
    setAnswer(state, action) {
      const content = action.payload;
      return { gg: state, ggs: content };
    },
  },
});

export const { setAnswer } = exerciseSlice.actions;

export const saveAnswer = (a) => {
  return (dispatch) => {
    dispatch(setAnswer(a));
  };
};

export default exerciseSlice.reducer;
