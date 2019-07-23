const { MONGO_DB_CONNECTION_STRING, NODE_ENV, PORT } = process.env
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()

if (NODE_ENV === 'dev') app.use(morgan('dev'))

if (MONGO_DB_CONNECTION_STRING) {
  const options = { useFindAndModify: false, useNewUrlParser: true }
  mongoose.connect(MONGO_DB_CONNECTION_STRING, options, function(err, db) {
    if(!err) {
      console.log('Connected to the database.')
    }
  })
}

// Middleware
app.use(require('body-parser').json())

// Routes
app.use('/api/v1/employees', require('./api/v1/routes/employees'))
app.use('/api/v1/companies', require('./api/v1/routes/companies'))
app.use('/api/v1/units', require('./api/v1/routes/units'))


// Error Handling
const error = ( status = 500, message = 'Server Error.' )
app.use((error, req, res, next) => {
  if (NODE_ENV === 'dev') console.log(error)
  res.status(status).json({ status, message })
})

const listener = () => console.log(`Listening on Port ${PORT}`)
app.listen(PORT, listener)