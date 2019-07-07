const express = require('express');
const app = express();
const playcontroller = require('./controllers/playcontroller');
const usercontroller = require('./controllers/usercontroller');
const workcontroller = require('./controllers/workcontroller');
const validateSession = require('./middleware/validate-session');
const sequelize = require('./db');
const bodyParser = require('body-parser'); //lets you grab the body

sequelize.sync();
app.use(express.json()); //express.json returns a middleware function// app.use((req, res) => console.log(req.body)); like a bodyparser

app.use(express.static(__dirname+'/public'));
app.get('/', (req, res) => res.render('index'));

 
app.use('/user', usercontroller);
// app.use(require('./middleware/validate-session')); //bouncer
app.all('/play', validateSession, (req, res, next) => {
  console.log('hey this is a big idea in express');
  next();
});
app.use('/play', playcontroller);
app.use('/work', workcontroller);


app.listen(3000, () => console.log('App is listening on 3000'));

