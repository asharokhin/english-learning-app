import React, { useState } from "react";
import * as appConstants from "../../constants";
// import { useLocation } from "react-router-dom";

import Exercise from "./Exercise";
import ExercisesResultList from "../ExerciseResultList/ExercisesResultList";

const exercises = [
  {
    id: "pt",
    task: "Choose the correct sentence from each pair.",
    type: appConstants.MULTIPLE_CHOICE,
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
    type: appConstants.TYPE_IN_SENTENCE,
    questions: [
      {
        sentences: [
          {
            pre: "My father",
            answer: "knows",
            hint: "know",
            post: "all about mending cars, but nothing about bicycles.",
          },
        ],
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
            answer: "is",
            hint: "be",
            post: "that man?",
          },
          {
            pre: "Why",
            answer: "is your sister being",
            hint: "your sister / be",
            post: "so rude to him?",
          },
          {
            pre: "She",
            answer: "has",
            hint: "have",
            post: "such beautiful manners normally.",
          },
        ],
      },
    ],
  },
  {
    id: "pt_2",
    task: "Fill in the gaps with the present simple or present continuous form of the verbs.",
    type: appConstants.TYPE_IN_DIALOGUE,
    questions: [
      {
        lines: [
          {
            character: "Alex",
            sentences: [
              {
                pre: "Why",
                answer: "are you wearing",
                hint: "you / wear",
                post: "my coat?",
              },
            ],
          },
          {
            character: "Ben",
            sentences: [
              {
                pre: "Oh, I'm sorry. It",
                answer: "looks",
                hint: "look",
                post: "like mine in this light.",
              },
            ],
          },
        ],
      },
      {
        lines: [
          {
            character: "Carl",
            sentences: [
              {
                pre: "I",
                answer: "have",
                hint: "have",
                post: "no idea what this sentence",
              },
              {
                answer: "means",
                hint: "mean",
                post: "Can you translate it?",
              },
            ],
          },
          {
            character: "Donna",
            sentences: [
              {
                pre: "No, sorry. I",
                answer: "don't understand",
                hint: "not understand",
                post: "it either.",
              },
            ],
          },
        ],
      },
      {
        lines: [
          {
            character: "Gina",
            sentences: [
              {
                pre: "What",
                answer: "are you doing",
                hint: "you / do",
                post: "in the kitchen?",
              },
              {
                pre: "Our guests",
                answer: "are waiting",
                hint: "wait",
                post: "for their dessert, and you",
              },
              {
                answer: "are getting",
                hint: "get",
                post: "in my way!",
              },
            ],
          },
          {
            character: "Hamid",
            sentences: [
              {
                pre: "I just",
                answer: "want",
                hint: "want",
                post: "to be somewhere quiet for a while.",
              },
              {
                pre: "Everyone",
                answer: "is being",
                hint: "be",
                post: "so noisy this evening.",
              },
              {
                pre: "I",
                answer: "don't know",
                hint: "not know",
                post: "why - it's very unusual!",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "pt_2",
    task: "Complete the email using the present simple or present continuous form of these verbs.",
    type: appConstants.COMPLETE_THE_TEXT,
    questions: [
      // single question
      {
        textData: {
          textType: "email",
          greeting: "Dear Stephanie",
          end: "Much love, Mick and Mary",
        },
        words: [
          "behave",
          "come",
          "cost",
          "eat",
          "enjoy",
          "feel",
          "go",
          "have",
          "like",
          "love",
          "pay",
          "realise",
          "say",
          "seem",
          "serve",
          "show",
          "smile",
          "stay",
          "take",
          "visit",
        ],
        paragraphs: [
          // paragraph
          [
            {
              pre: "How are you? We're fine. Our trip round the States",
              answer: "is going'",
              post: "well and",
              num: "1",
            },
            {
              pre: "we",
              answer: "are enjoying",
              post: "ourselves a lot.",
              num: "2",
            },
            {
              pre: "One good surprise is that things",
              answer: "cost",
              post: "less here than back home.",
              num: "3",
            },
            {
              pre: "For example, this weekend we",
              answer: "are staying",
              post: "in a motel beside a lake and",
              num: "4",
            },
            {
              pre: "we",
              answer: "are paying",
              post: "only $65 per night for a room with a beautiful view.",
              num: "5",
            },
          ],
          // paragraph
          [
            {
              pre: "The only thing we",
              answer: "dont't like",
              post: "(not) much is the food.",
              num: "6",
            },
            {
              pre: "Restaurants",
              answer: "serve",
              post: "dinner rather early.",
              num: "7",
            },
            {
              pre: "We",
              answer: "never eat",
              post: "at six o'clock at home so",
              num: "8",
            },
            {
              pre: "we",
              answer: "don't feel",
              post: "(not) hungry then and",
              num: "9",
            },
            {
              pre: "American portions",
              answer: "seem",
              post: "very big to us.",
              num: "10",
            },
            {
              pre: "Apart from that, we",
              answer: "are having",
              post: "a wonderful time.",
              num: "11",
            },
            {
              pre: "We",
              answer: "are visiting",
              post: "lots of interesting little towns and",
              num: "12",
            },
            {
              pre: "we absolutely",
              answer: "love",
              post: "the scenery.",
              num: "13",
            },
          ],
          // paragraph
          [
            {
              pre: "People here",
              answer: "behave",
              post: "in a very friendly manner towards strangers.",
              num: "14",
            },
            {
              pre: "All the shop assistants",
              answer: "smile",
              post: "at us,",
              num: "15",
            },
            {
              pre: "and everyone",
              answer: "says",
              post: "'Have a nice day!'",
              num: "16",
            },
            {
              pre: "At home, the TV",
              answer: "is always showing",
              post: "(always) us bad news stories about the States,",
              num: "17",
            },
            {
              pre: "but in fact, when you",
              answer: "come",
              post: "here",
              num: "18",
            },
            {
              pre: "you",
              answer: "realise",
              post: "it's a really great place.",
              num: "19",
            },
            {
              pre: "We",
              answer: "are taking",
              post: "lots of photos to show you.",
              num: "20",
            },
          ],
        ],
      },
    ],
  },
];

const r = [
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
const Exercises = () => {
  // const { state } = useLocation();
  // onst { exId } = state;

  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(3);

  const [allFinished, setAllFinished] = useState(false);
  const [usersAnswers, setUsersAnswers] = useState(r);

  const nextStep = () => {
    if (currentExerciseIdx < exercises.length - 1) {
      setCurrentExerciseIdx(currentExerciseIdx + 1);
    } else {
      setAllFinished(true);
    }
  };

  // logic for saving answers from user
  const onSubmitAnswers = (data) => {
    setUsersAnswers(usersAnswers.concat([data]));
    console.log("submitted", data);
    nextStep();
  };

  return (
    <>
      {allFinished ? (
        <ExercisesResultList />
      ) : (
        <>
          <h1>Exercises</h1>
          <h3>Exercise {currentExerciseIdx + 1}</h3>
          <p>{exercises[currentExerciseIdx].task}</p>
          <Exercise
            key={currentExerciseIdx}
            ex={exercises[currentExerciseIdx]}
            onSubmitAnswers={onSubmitAnswers}
          />
        </>
      )}
      <br />
    </>
  );
};

export default Exercises;
