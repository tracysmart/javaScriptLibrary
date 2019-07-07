require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');

var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

//2
sequelize.sync(); //tip: pass in {force: true} for resetting tables
app.use(bodyParser.json());
app.use(require('./middleware/headers')); 


//EXPOSED ROUTES
app.use('/test', test)
app.use('/api/user', user);

//PROTECTED ROUTES
app.use(require('./middleware/validate-session'));
app.use('/authtest', authTest);

app.listen(3000, function(){
  console.log('App is listening on 3000.')
});