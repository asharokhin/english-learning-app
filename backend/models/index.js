const Exercise = require('./exercise')
const McQuestion = require('./mc_question')
const TisQuestion = require('./tis_question')
const TiSentence = require('./ti_sentence')

Exercise.sync({ alter: true})
McQuestion.sync( {alter: true})
TisQuestion.sync( {alter: true})
TiSentence.sync( {alter: true})

module.exports = {
  Exercise,  McQuestion, TisQuestion, TiSentence
}
