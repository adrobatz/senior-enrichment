const router = require('express').Router();
const { Student, Campus } = require('../db/models');

// GET
router.get('/', function (req, res, next) {
  Campus.findAll({
    include: [{
      model: Student
    }]
  })
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId
  Campus.findAll({where: {id: campusId}})
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.put('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId
  Campus.update({where: {id: campusId}})
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.delete('/:campusId', function (req, res, next) {
  const campusId = req.params.campusId
  Campus.destroy({where: {id: campusId}})
    .then(() => res.sendStatus(204))
    .catch(next);
});

module.exports = router;

