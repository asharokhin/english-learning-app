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
  [
    {
      answer: "is going",
      isCorrect: true,
    },
    {
      answer: "are enjoying",
      isCorrect: true,
    },
    {
      answer: "cost",
      isCorrect: true,
    },
    {
      answer: "are staying",
      isCorrect: true,
    },
    {
      answer: "are paying",
      isCorrect: true,
    },
    {
      answer: "don't like",
      isCorrect: true,
    },
    {
      answer: "serve",
      isCorrect: true,
    },
    {
      answer: "don't eat",
      isCorrect: true,
    },
    {
      answer: "are not",
      isCorrect: true,
    },
    {
      answer: "are",
      isCorrect: true,
    },
    {
      answer: "have",
      isCorrect: false,
    },
    {
      answer: "are seeing",
      isCorrect: false,
    },
    {
      answer: "love",
      isCorrect: true,
    },
    {
      answer: "smile",
      isCorrect: true,
    },
    {
      answer: "wave",
      isCorrect: true,
    },
    {
      answer: "says",
      isCorrect: true,
    },
    {
      answer: "is always showing",
      isCorrect: true,
    },
    {
      answer: "came",
      isCorrect: true,
    },
    {
      answer: "realise",
      isCorrect: true,
    },
    {
      answer: "are taking",
      isCorrect: true,
    },
  ],
  [
    {
      answer: 0,
      isCorrect: true,
    },
    {
      answer: 1,
      isCorrect: false,
    },
    {
      answer: 0,
      isCorrect: false,
    },
    {
      answer: 0,
      isCorrect: true,
    },
    {
      answer: 1,
      isCorrect: true,
    },
    {
      answer: 1,
      isCorrect: false,
    },
  ],
  [
    {
      answer: 0,
      isCorrect: false,
    },
    {
      answer: 1,
      isCorrect: true,
    },
    {
      answer: 2,
      isCorrect: false,
    },
    {
      answer: 0,
      isCorrect: false,
    },
    {
      answer: 1,
      isCorrect: false,
    },
    {
      answer: 2,
      isCorrect: false,
    },
    {
      answer: 0,
      isCorrect: false,
    },
  ],
];

const usersAnswersSlice = createSlice({
  name: "usersAnswers",
  initialState: usersAnswers,
  reducers: {},
});

export default usersAnswersSlice.reducer;
