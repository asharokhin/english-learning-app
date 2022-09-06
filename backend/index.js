const express = require('express')
const app = express()

const { PORT } = require('./util/config')
const { connectToDatabase } = require('./util/db')

const grammarExercisesRouter = require('./controllers/grammar_exercises')

const { errorHandler } = require('./util/middleware')


app.use(express.json())
app.use('/resources/grammar', grammarExercisesRouter)

app.use(errorHandler)

const start = async () => {
    await connectToDatabase()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  }
  
  start()
