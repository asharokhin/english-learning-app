import { createSlice } from "@reduxjs/toolkit";

const exercises = [
  {
    id: "pt",
    task: "Choose the correct sentence from each pair.",
    type: "multiple_choice",
    questions: [
      {
        choices: [
          "My brother lives with us until he can find a flat of his own.",
          "My brother is living with us until he can find a flat of his own.",
        ],
        answer: 1,
      },
      //     // {
      //     //   choices: [
      //     //     "Megan goes to Hong Kong every January.",
      //     //     "Megan's going to Hong Kong every January.",
      //     //   ],
      //     //   answer: 0,
      //     // },
      //     // {
      //     //   choices: [
      //     //     "I don't have enough money for a long holiday this year.",
      //     //     "I'm not having enough money for a long holiday this year.",
      //     //   ],
      //     //   answer: 0,
      //     // },
      //     // {
      //     //   choices: [
      //     //     "Everyone needs a break from work sometimes.",
      //     //     "Everyone is needing a break from work sometimes.",
      //     //   ],
      //     //   answer: 0,
      //     // },
      //     // {
      //     //   choices: [
      //     //     "What period of history do you study this term?",
      //     //     "What period of history are you studying this term?",
      //     //   ],
      //     //   answer: 1,
      //     // },
      //     // {
      //     //   choices: [
      //     //     "The team manager looks bad-tempered in public, but he's always being very kind to young players.",
      //     //     "The team manager looks bad-tempered in public, but he's always very kind to young players.",
      //     //   ],
      //     //   answer: 1,
      //     // },
    ],
  },
  {
    id: "pt_2",
    task: "Complete these sentences with the present simple or present continuous form of the verbs.",
    type: "type_in_sentence",
    questions: [
      {
        sentences: [
          {
            pre: "My father",
            hint: "know",
            post: "all about mending cars, but nothing about bicycles.",
          },
        ],
        answers: ["knows"],
      },
      // {
      //   sentence: "This pie {{c1:smells}} (smell) a bit odd. What's in it?",
      //   answers: ["smells"],
      // },
      // {
      //   sentence:
      //     "I {{c1:like}} (like) the jacket of this suit, but unfortunately the trousers {{c2:don't fit}} (not fit) me any more.",
      //   answers: ["like", "don't fit"],
      // },
      // {
      //   sentence:
      //     "You're very quiet this evening. What {{c1:are you thinking}} (you / think) about?",
      //   answers: ["are you thinking"],
      // },
      {
        sentences: [
          {
            pre: "Who",
            hint: "be",
            post: "that man?",
          },
          {
            pre: "Why",
            hint: "your sister / be",
            post: "so rude to him?",
          },
          {
            pre: "She",
            hint: "have",
            post: "such beautiful manners normally.",
          },
        ],
        answers: ["is", "is your sister", "has"],
      },
    ],
  },
];

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: exercises,
  reducers: {
    getExercisesTypes(state, action) {
      const content = action.payload;
      return { gg: state, ggs: content };
    },
  },
});

export const { getExercisesTypes } = exercisesSlice.actions;

export const getExerciseTypeList = (a) => {
  return (dispatch) => {
    dispatch(getExercisesTypes(a));
  };
};

export default exercisesSlice.reducer;
