const router = require('express').Router();
const { Student, Campus } = require('../db/models');

// GET
router.get('/', function (req, res, next) {
  Student.findAll({
    include: [{model: Campus}]
  })
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId
  Student.findAll({
    where: {id: studentId},
    include: {
      model: Campus
    }
  })
    .then(students => res.json(students))
    .catch(next);
});

router.post('/', function (req, res, next) {
  Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gpa: req.body.gpa
  })
    .then(students => res.json(students))
    .catch(next);
});

router.put('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId
  Student.update({where: {id: studentId}})
    .then(students => res.json(students))
    .catch(next);
});

router.delete('/:studentId', function (req, res, next) {
  const studentId = req.params.studentId
  Student.destroy({where: {id: studentId}})
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;

