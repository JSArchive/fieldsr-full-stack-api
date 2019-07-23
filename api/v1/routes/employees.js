const router = require('express').Router()
const Employees = require('../models/employees')

// Return all Employees.  If query is passed evaulate query.
router.get('/', (req, res, next) => {
    const status = 200
  
    Companies.find(req.query).then(response => {
  
      res.json({ status, response })
    })
  })

module.exports = router