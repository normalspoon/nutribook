const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config()
require('./config/database')
require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/plans', require('./routes/api/mealPlans'));



app.get('/people', function (req,res){
    return res.send(['hi','testing'])
})


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
