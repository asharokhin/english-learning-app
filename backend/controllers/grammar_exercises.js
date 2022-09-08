const router = require("express").Router();
const {sequelize} = require("../util/db")
const { Exercise, McQuestion, TisQuestion, TiSentence } = require('../models/');
const { QueryTypes } = require("sequelize");

const ex_pres_tense = {
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
};

router.get("/", async (req, res) => {
  const exercise = await Exercise.findAll() 
  res.json({ hello: "World" });
});

router.get("/present-tenses", async(req, res) => {    
    const queryMcExercises = `SELECT e.number, e.type, e.task, array_agg(json_build_object('choices', q.choices, 'answer', q.answer)) as questions 
    FROM exercises e INNER JOIN mc_questions q 
    ON e.id = q.exercise_id 
    WHERE unit='present_tenses' 
    GROUP BY 1,2,3
    ORDER BY 1`

    const queryTisExercises = `SELECT e.number, e.type, e.task, 
    array_agg(json_build_object('pre', s.pre, 'answer', s.answer, 'hint', s.hint, 'post', s.post
    )) as questions
    FROM (SELECT id AS ql_id, exercise_id, unnest(sentences) AS sentence_id FROM tis_questions) AS question_list 
    INNER JOIN ti_sentences s
    ON question_list.sentence_id = s.id
    INNER JOIN exercises e
    ON e.id = question_list.exercise_id
    WHERE e.unit='present_tenses'
    GROUP BY 1, 2, 3       
    `

    // const [mcExercises] = await sequelize.query(queryMcExercises,
    // { type: QueryTypes.SELECT });
   
    //console.log("mcExercises", mcExercises)

    const [tisExercises] = await sequelize.query(queryTisExercises, { type: QueryTypes.SELECT });
    console.log("tisExercises", tisExercises.questions)


    //res.json(exercise);
})

router.post("/present-tenses", async(req, res) => {
  const { task, type, questions, unit, number} = req.body

  console.log('questions', questions);
  const exercise = await Exercise.create({task, type, unit, number})

  const exerciseId = exercise.dataValues.id;
  console.log("exerciseId", exerciseId);

  if (type === 'multiple_choice') {
    await McQuestion.create({...questions[0], exerciseId, number: 1})
    await McQuestion.create({...questions[1], exerciseId, number: 2})
  } else if (type === "type-in-sentence") {
    
    let questionNumber = 0;
    
    await Promise.all(questions.map(async (question) => {
      let sentenceIds = [];
      questionNumber += 1;

      await Promise.all(question.sentences.map(async (sentence) => {
        const {pre, answer, hint, post} = sentence
        const savedSentence = await TiSentence.create({pre, answer, hint, post})
        sentenceIds.push(savedSentence.id)
      }))

      console.log("sentenceIds", sentenceIds);
      await TisQuestion.create({exerciseId, number: questionNumber, sentences: sentenceIds} )
      sentenceIds = []
    }))

   

    console.log("tis saving done");

  }
 
  
})

module.exports = router;

/*
WITH question_list AS (SELECT id AS ql_id, exercise_id, unnest(sentences) AS sentence_id FROM tis_questions),
question_sentences AS (SELECT question_list.exercise_id, array_agg(json_build_object('pre', s.pre, 'answer', s.answer, 'hint', s.hint, 'post', s.post
)) as sentences
FROM question_list
INNER JOIN ti_sentences s
ON question_list.sentence_id = s.id
GROUP BY 1, ql_id),
ob AS (SELECT unnest(sentences) sentences FROM question_sentences)
SELECT array_agg(ob.sentences) FROM ob

 */