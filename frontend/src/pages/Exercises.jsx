import React, { useState } from "react";
// import { useLocation } from "react-router-dom";

import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import TypeInSentence from "./TypeInSentence";

// const q = "Choose the correct sentence from each pair.";

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
      {
        choices: [
          "Megan goes to Hong Kong every January.",
          "Megan's going to Hong Kong every January.",
        ],
        answer: 0,
      },
      {
        choices: [
          "I don't have enough money for a long holiday this year.",
          "I'm not having enough money for a long holiday this year.",
        ],
        answer: 0,
      },
      {
        choices: [
          "Everyone needs a break from work sometimes.",
          "Everyone is needing a break from work sometimes.",
        ],
        answer: 0,
      },
      {
        choices: [
          "What period of history do you study this term?",
          "What period of history are you studying this term?",
        ],
        answer: 1,
      },
      {
        choices: [
          "The team manager looks bad-tempered in public, but he's always being very kind to young players.",
          "The team manager looks bad-tempered in public, but he's always very kind to young players.",
        ],
        answer: 1,
      },
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
      },
      {
        sentence: "This pie {{c1:smells}} (smell) a bit odd. What's in it?",
      },
      {
        sentence:
          "I {{c1:like}} (like) the jacket of this suit, but unfortunately the trousers {{c2:don't fit}} (not fit) me any more.",
      },
      {
        sentence:
          "You're very quiet this evening. What {{c1:are you thinking}} (you / think) about?",
      },
      {
        sentence:
          "Who {{c1:is}} (be) that man? Why {{c2:is your sister}} (your sister / be) so rude to him? She {{c3:has}} (have) such beautiful manners normally.",
      },
    ],
  },
];

const Exercises = () => {
  // const { state } = useLocation();
  // onst { exId } = state;

  const [currentExercise, setCurrentExercise] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const saveAnswer = (data) => {
    if (answers[currentExercise] === undefined) {
      setAnswers(answers.concat([[data]]));
    } else {
      setAnswers(
        answers.map((ex, index) =>
          index === currentExercise ? [...ex, data] : ex
        )
      );
    }
  };

  const nextStep = () => {
    if (currentQuestion < exercises[currentExercise].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentExercise < exercises.length - 1) {
      setCurrentQuestion(0);
      setCurrentExercise(currentExercise + 1);
    } else {
      setFinished(true);
    }
  };

  const onSubmitAnswer = (data) => {
    saveAnswer(data);

    nextStep();
  };

  const exerciseHead = () => {
    return (
      <>
        <p>Exercise {currentExercise + 1}</p>
        <p>
          Question {currentQuestion + 1} out of{" "}
          {exercises[currentExercise].questions.length}
        </p>
        {exercises[currentExercise].task}
        <br />
      </>
    );
  };

  const showQuestion = () => {
    if (isFinished) {
      console.log(answers);
      return <p>All exercises are done.</p>;
    }
    const currExerciseType = exercises[currentExercise].type;
    switch (currExerciseType) {
      case "multiple_choice":
        return (
          <>
            {exerciseHead()}
            <MultipleChoiceQuestion
              choices={
                exercises[currentExercise].questions[currentQuestion].choices
              }
              onSubmit={onSubmitAnswer}
            />
          </>
        );
      case "type_in_sentence":
        return (
          <>
            {exerciseHead()}
            <TypeInSentence
              sentence={
                exercises[currentExercise].questions[currentQuestion].sentence
              }
              onSubmit={onSubmitAnswer}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Exercises</h1>
      {showQuestion()}

      <br />
    </div>
  );
};

export default Exercises;
