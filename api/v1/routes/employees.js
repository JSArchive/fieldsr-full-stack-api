const router = require('express').Router()
const Employees = require('../models/employees')


//Notes / To-Do, test that these work with req.query or if I need more logiic:

// GET /api/v1/employees?name=[partial-query]

// GET /api/v1/employees?birthday=[date]



// Return all Employees.  If query is passed evaulate query.
router.get('/', (req, res, next) => {
    const status = 200
  
    Companies.find(req.query).then(response => {
  
      res.json({ status, response })
    })
  })

module.exports = router
