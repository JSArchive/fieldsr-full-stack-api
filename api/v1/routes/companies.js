const router = require('express').Router()
const Companies = require('../models/companies')

router.get('/', (req, res, next) => {
    const status = 200

//Notes / To-Do, test that these work with req.query or if I need more logiic:

//  GET /api/v1/companies?employees_lte=[integer]

// GET /api/v1/companies?employees_gte=[integer]



    
// Return all Companies.  If query is passed evaulate query.
router.get('/', (req, res, next) => {
    const status = 200
  
    Companies.find(req.query).then(response => {
  
      res.json({ status, response })
    })
  })

module.exports = router
