const Sequelize = require('sequelize');

const sequelize = new Sequelize('workoutlogserver3', 'postgres', '2019Patches', {
    host: 'localhost', //7
    dialect: 'postgres'  ///8
});
 
sequelize.authenticate().then(
    function() { //12
        console.log('Connected to workoutlogserver3 postgres database');
    },
    function(err){ //13
        console.log(err);
    }
);
                
module.exports = sequelize;