const errorHandler = (error, req, res, next) => {
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).send({
        error: error.errors.map(e => e.message)
      })
    }
  
    if (error.name === 'SequelizeDatabaseError') {
      console.log(error)
      return res.status(400).send({
        error: 'bad data...'
      })
    }
  
    next(error)
  }

  module.exports = {
    errorHandler
  }