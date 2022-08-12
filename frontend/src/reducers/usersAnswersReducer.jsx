import { createSlice } from "@reduxjs/toolkit";

const usersAnswers = [
  [{ answer: 0, isCorrect: false }],
  [
    [
      {
        answer: "knows",
        isCorrect: true,
      },
    ],
    [
      {
        answer: "is",
        isCorrect: true,
      },
      {
        answer: "is",
        isCorrect: false,
      },
      {
        answer: "has",
        isCorrect: true,
      },
    ],
  ],
];

const usersAnswersSlice = createSlice({
  name: "usersAnswers",
  initialState: usersAnswers,
  reducers: {},
});

export default usersAnswersSlice.reducer;
