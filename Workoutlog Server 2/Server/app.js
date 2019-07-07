require('dotenv').config();

var express = require('express'); //1
var app = express();
var test = require('./controllers/testcontroller');
var user = require('./controllers/usercontroller');

var bodyParser = require('body-parser');
app.use(require('./middleware/headers'));
var sequelize = require('./db');


sequelize.sync(); // tip: pass in {force: true} for resetting tables

app.use(bodyParser.json());

app.use('/test', test);

app.use('/api', user);


//3         //4
app.listen(3000, function(){
  console.log('App is listening on 3000.')
 });

 app.use('/api/test', function(req, res){
  res.send("This is data from the /api/test endpoint. It's from the server.");
 });