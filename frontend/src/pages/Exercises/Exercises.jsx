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
              answer: "is going",
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
  {
    id: "pt",
    task: "Choose the correct verb forms.",
    type: appConstants.MULTIPLE_CHOICE_INLINE,
    questions: [
      {
        pre: "I",
        choices: ["want", "am wanting"],
        answer: 0,
        post: "to help out at the camp this summer.",
      },
      {
        pre: "Most Spanish companies",
        choices: ["belong", "are beloging"],
        answer: 0,
        post: "to multinationals nowadays.",
      },
      {
        pre: "I",
        choices: ["think", "am thinking"],
        answer: 1,
        post: "about interviewing my grandfather's friend, who collects vintage cars.",
      },
      {
        pre: "My father went to that university, so he",
        choices: ["knows", "is knowing"],
        answer: 0,
        post: "all about it.",
      },
      {
        pre: "Ned",
        choices: ["has", "is having"],
        answer: 1,
        post: "a lot of problems with his teacher at the moment.",
      },
      {
        pre: "Every town",
        choices: ["needs", "is needing"],
        answer: 0,
        post: "a library, even though everyone has the internet nowadays.",
      },
    ],
  },
  {
    id: "pt",
    task: "You will hear an interview with a man called Martin Holloway who is a sound engineer. For questions 1-7, choose the best answer (A, B or C).",
    type: appConstants.LISTENING_MULTIPLE_CHOICE,
    questions: [
      {
        sentences: [
          {
            question:
              "The mistake people make about sound engineers is to think that",
            choices: [
              "they spend most o their time working indoors.",
              "their job is the same as that of a disc jockey.",
              "they are responsible for the quality of the music.",
            ],
            answerIndex: 0,
          },
          {
            question: "What does Martin say helped him to begin earning money?",
            choices: [
              "the course he did",
              "some of the bands he played in",
              "some people he met",
            ],
            answerIndex: 0,
          },
          {
            question: "Martin first gets involved in a project",
            choices: [
              "as soon as the band is booked.",
              "when he visits the venue.",
              "while the band is rehearsing.",
            ],
            answerIndex: 0,
          },
          {
            question: "What does Martin often find during a show?",
            choices: [
              "There are problems with the equipment.",
              "Very little goes wrong for him.",
              "The performers don't communicate with him.",
            ],
            answerIndex: 0,
          },
          {
            question:
              "What change in equipment has Martin appreciated the most over the years?",
            choices: [
              "It is more portable.",
              "The sound quality is better.",
              "It is less expensive.",
            ],
            answerIndex: 0,
          },
          {
            question:
              "According to Martin, what is the most important quality in a sound engineer?",
            choices: [
              "some musical ability",
              "good communication skills",
              "practical technical knowledge",
            ],
            answerIndex: 2,
          },
          {
            question: "What does Martin find most difficult about his job?",
            choices: [
              "working in difficult environments",
              "being away for periods of time",
              "waiting fo things to happen",
            ],
            answerIndex: 2,
          },
        ],
      },
    ],
  },
  {
    id: "pt",
    task: "Here are some extracts from the interview. Choose the present tense that the speaker uses. Listen again to check.",
    type: appConstants.LISTENING_MULTIPLE_CHOICE_INLINE,
    questions: [
      [
        {
          pre: "I",
          choices: ["usually set up", "am usually setting up"],
          answer: 0,
          post: "the equipment before the show.",
        },
        {
          pre: "What you",
          choices: ["hear", "are hearing"],
          answer: 0,
          post: "is out of tune.",
        },
        {
          pre: "People sometimes",
          choices: ["call", "are calling"],
          answer: 1,
          post: "me a disc jockey.",
        },
        {
          pre: "This weekend, I",
          choices: ["work", "am working"],
          answer: 0,
          post: "at a music festival.",
        },
        {
          pre: "I mostly",
          choices: ["work", "am working"],
          answer: 1,
          post: "out of doors.",
        },
        {
          pre: "Some people",
          choices: ["think", "are thinking"],
          answer: 0,
          post: "we just turn up on the day.",
        },
        {
          pre: "Everything",
          choices: ["gets", "is getting"],
          answer: 0,
          post: "smaller all the time.",
        },
        {
          pre: "But",
          choices: ["I always tell", "I'm always telling"],
          answer: 0,
          post: "people and they never listen.",
        },
        {
          pre: "They just",
          choices: ["don't realise", "aren't realising"],
          answer: 0,
          post: "that what's crucial is being able to get on with people.",
        },
        {
          pre: "An interest in music",
          choices: ["means", "is meaning"],
          answer: 0,
          post: "it is more enjoyable.",
        },
      ],
    ],
  },
];

const r = [[{ answer: 0, isCorrect: false }]];
const Exercises = () => {
  // const { state } = useLocation();
  // onst { exId } = state;

  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(6);

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
