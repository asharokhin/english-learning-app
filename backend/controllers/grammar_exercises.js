const router = require("express").Router();

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
  res.json({ hello: "World" });
});

router.get("/present-tenses", async(req, res) => {
    res.json(ex_pres_tense);
})

module.exports = router;
