const router = require('express').Router()
const Companies = require('../models/companies')

router.get('/', (req, res, next) => {
    const status = 200
    
// Return all Companies.  If query is passed evaulate query.
router.get('/', (req, res, next) => {
    const status = 200
  
    Companies.find(req.query).then(response => {
  
      res.json({ status, response })
    })
  })

module.exports = router