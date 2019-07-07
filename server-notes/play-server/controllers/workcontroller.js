const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Work = sequelize.import('../models/work');

// router.get('/', () => (req, res) => res.send('I love to play all day!'));

router.post('/new', (req, res) => {
  Work.create({
    businessName: req.body.businessName, 
    positionTitle: req.body.positionTitle,
    yearsExp: req.body.yearsExp,
    enjoyment: req.body.enjoyment
  })
  .then(work => res.status(200).json(work))
  .catch(err => res.json(err))
})

// router.get('/all', (req, res) => {
//  Work.findAll({ where: {id:[] }})
//     .then(works => res.status(200).json(works))
//     .catch(err => res.json(err))
// })

router.delete('/:id', (req, res) => {
  Work.destroy({where: {id:req.params.id}})
  .then(num => res.status(200).json(num))
  .catch(err => res.json(err))
})

// router.put('/:id', (req, res) => {
//   Work.update({enjoyment: req.body.funFactor}, {where: {id: [4]}})
//   .then(work => res.status(200).json(work))
//   .catch(err => res.json(err))
// })

module.exports = router;