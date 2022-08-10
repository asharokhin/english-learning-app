import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

import Exercise from "./Exercise";
import ExerciseResults from "./ExerciseResults";

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
        sentence:
          "My father {{c1:knows}} (know) all about mending cars, but nothing about bicycles.",
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
      // {
      //   sentence:
      //     "Who {{c1:is}} (be) that man? Why {{c2:is your sister}} (your sister / be) so rude to him? She {{c3:has}} (have) such beautiful manners normally.",
      //   answers: ["is", "is your sister", "has"],
      // },
    ],
  },
];

const Exercises = () => {
  // const { state } = useLocation();
  // onst { exId } = state;

  const [currentExerciseIdx, setCurrentExerciseIdx] = useState(0);

  const [allFinished, setAllFinished] = useState(false);
  const [usersAnswers, setUsersAnswers] = useState([]);

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

    nextStep();
  };

  return (
    <div>
      <h1>Exercises</h1>
      Exercise {currentExerciseIdx + 1}
      {allFinished ? (
        <ExerciseResults results={usersAnswers} />
      ) : (
        <Exercise
          key={currentExerciseIdx}
          ex={exercises[currentExerciseIdx]}
          onSubmitAnswers={onSubmitAnswers}
        />
      )}
      <br />
    </div>
  );
};

export default Exercises;
