const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const Play = sequelize.import('../models/play');

// router.get('/', () => (req, res) => res.send('I love to play all day!'));

router.get('/all', (req, res) => {
  Play.findAll({ where: {id:[1,2,3] }})
    .then(plays => res.status(200).json(plays))
    .catch(err => res.json(err))
})

router.post('/new', (req, res) => {
  Play.create({
    nameOfHobby: req.body.nameOfHobby, 
    duration: req.body.duration,
    funFactor: req.body.funFactor,
    withTeam: req.body.withTeam
  })
  .then(play => res.status(200).json(play))
  .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Play.destroy({where: {id:[2]}})
  .then(play => res.status(200).json(play))
  .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  Play.update({funFactor: req.body.funFactor}, {where: {id: [4]}})
  .then(play => res.status(200).json(play))
  .catch(err => res.json(err))
})

module.exports = router;