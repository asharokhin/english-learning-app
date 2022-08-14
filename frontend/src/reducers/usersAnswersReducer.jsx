import { createSlice } from "@reduxjs/toolkit";

const usersAnswers = [
  [
    { answer: 0, isCorrect: false },
    { answer: 0, isCorrect: true },
  ],
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
  // exercise
  [
    // question
    [
      // line
      [
        // user's answer
        {
          answer: "are you wearing",
          isCorrect: true,
        },
      ],
      // line
      [
        // user's answer
        {
          answer: "looks",
          isCorrect: true,
        },
      ],
    ],
    // question
    [
      // line
      [
        // user's answer
        {
          answer: "have",
          isCorrect: true,
        },
        // user's answer
        {
          answer: "mean",
          isCorrect: false,
        },
      ],
      // line
      [
        // user's answer
        {
          answer: "don't",
          isCorrect: false,
        },
      ],
    ],
    // question
    [
      // line
      [
        // user's answer
        {
          answer: "are you doing",
          isCorrect: true,
        },
        // user's answer
        {
          answer: "are waiting",
          isCorrect: true,
        },
        // user's answer
        {
          answer: "are getting",
          isCorrect: true,
        },
      ],
      // line
      [
        // user's answer
        {
          answer: "want",
          isCorrect: true,
        },
        // user's answer
        {
          answer: "are",
          isCorrect: false,
        },
        // user's answer
        {
          answer: "don't",
          isCorrect: false,
        },
      ],
    ],
  ],
];

const usersAnswersSlice = createSlice({
  name: "usersAnswers",
  initialState: usersAnswers,
  reducers: {},
});

export default usersAnswersSlice.reducer;
