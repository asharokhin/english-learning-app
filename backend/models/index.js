const Exercise = require('./exercise')
const McQuestion = require('./mc_question')
const TisQuestion = require('./tis_question')
const TiSentence = require('./ti_sentence')
McQuestion.hasMany(Exercise)
//Exercise.belongsTo(McQuestion)

TisQuestion.hasMany(Exercise)
//Exercise.belongsTo(TisQuestion)

TisQuestion.hasMany(TiSentence)
TiSentence.belongsTo(TisQuestion)

Exercise.sync({ alter: true})
McQuestion.sync( {alter: true})
TisQuestion.sync( {alter: true})
TiSentence.sync( {alter: true})

module.exports = {
  Exercise,  McQuestion, TisQuestion, TiSentence
}
