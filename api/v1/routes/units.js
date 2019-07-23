const router = require('express').Router()
const Units = require('../models/units')
const Companies = require('../models/companies')
const Employee = require('../models/employees')


// Return all Units.  If query is passed evaulate query.
router.get('/', (req, res, next) => {
  const status = 200

  Units.find(req.query).then(response => {

    res.json({ status, response })
  })
})

// Create All Units with Employee and Company Data
router.post('/', (req, res, next) => {
  const status = 201
  Units.create(req.body)
  const response = Units
  
  res.json({ status, response })
})


//Patch Unit
router.patch('/:unitId', (req, res, next) => {
  const status = 201
  Units.findOneAndUpdate({_id:req.params.unitId}, req.body, function (err, response) {
    res.json({ status, response }).catch(error => {
      console.error(error)
      const err = new Error('Not Found')
      err.status = 404
      next(err)
    })
  });
})

//Patch Company - This works if I pass in a nested object and can remove the name:
//{
//	"company": {
//		"name": "google1"
//	}
//}

router.patch('/:unitId/company', (req, res, next) => {
  const status = 201
  Units.findOneAndUpdate({_id:req.params.unitId}, req.body, function (err, response) {
    res.json({ status, response })
 
  });
})


// Delete Company
var deleteCompany = {
	"company": {
    "name": ""
	}
}
router.delete('/:unitId/company', (req, res, next) => {
  const status = 201
  Units.findOneAndUpdate({_id:req.params.unitId}, deleteCompany, function (err, response) {
    res.json({ status, response })
 
  });
})

// Get Employees Only
router.get('/:unitId/company/employees', (req, res, next) => {
  const status = 200

  Units.findById(req.params.unitId).then(response => {
  
    response = (response.company[0].employees)
    res.json({ status, response })
  })
})


// Get Employees Using EmployeeId

router.get('/:unitId/company/employees/:employeeId', (req, res, next) => {

  Units.findById(req.params.unitId).then(response => {
    const employeeID = (req.params.employeeId)
    const status = 200

    if ( employeeID != (response.company[0].employees[0]._id )){
       response = {}
       status = 404
      }
    res.json({ status, response })
  })
})


router.post('/:unitId/company/employees', (req, res, next) => {
  if (! req.body.employees){
      status = 500
      res(status, 'Need JSON payload with EMPLOYEE information')

  }
  
  else {
    status = 200

    Units.findOneAndUpdate({_id:req.params.unitId}, req.body, function (err, response) {

      res.json({ status, response })
    });

   
  }
})

  //Patch Employee - This works if I pass in a nested object and can remove the name:
//{
//	"company": {
//    "employee":
//		
//	}
//}

router.patch('/:unitId/company/employees/:employeeId', (req, res, next) => {
  if (! req.body.employees.employeeId != response.company[0].employees[0]._id){
    status = 500
    res(status, 'Need JSON payload with EmployeeID information')
}

else {
  status = 200

  Units.findOneAndUpdate({_id:req.params.unitId}, req.body, function (err, response) {

    res.json({ status, response })
  });
}
})

//Not Yet Working, Tried to delete by updating using a "Pull"
router.delete('/:unitId/company/employees/:employeeId', (req, res, next) => {
 
  Units.findOneAndUpdate(
    { },
    { $pull: { event: 
    { _id: {_id:req.params.unitId}, 
      company:[ 
        { employees:[ {_id: {_id:req.params.employeeId} } ] }
    ] } } 
    })
    res.json({ status, res })

})








module.exports = router