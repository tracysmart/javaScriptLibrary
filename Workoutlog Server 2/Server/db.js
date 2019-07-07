const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlog2', 'postgres', '2019Patches', {
 host:'localhost',
 dialect: 'postgres'
});

sequelize.authenticate().then(
  function() {
    console.log('Connected to workoutlog2 postgres database');
  },
  function(err) {
    console.log(err);
  }
);

module.exports = sequelize;