require('dotenv').config();

var express = require('express');
var app = express();
var test= require('./controllers/testcontroller');
var log = require('./controllers/logcontroller');
var user = require('./controllers/usercontroller') //1
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables

app.use(bodyParser.json());
// app.use(require('./middleware/headers'));

/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test); 
app.use('/souvenir', user);

/******************
 * PROTECTED ROUTES
*******************/

app.use(require('./middleware/validate-session')); //2
app.use('/log', log); //3

app.listen(3000, function(){
    console.log('App is listening on 3000.')
});