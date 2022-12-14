var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var resourceRouter = require('./routes/resource');
var ballsRouter = require('./routes/balls');
var gridRouter = require('./routes/gridbuild');

var Ball = require("./models/balls"); 

require('dotenv').config(); 
const connectionString =  process.env.MONGO_CON; 
console.log(connectionString);
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  {useNewUrlParser: true, 
useUnifiedTopology: true}); 


//Get the default connection 
var db = mongoose.connection;  

//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

  // We can seed the collection if needed on server start 

async function recreateDB(){ 
  // Delete everything 
  await Ball.deleteMany(); 
 
  let instance1 = new 
Ball({ball_type:"football",  size:'large', 
weight:10}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 


  let instance2 = new 
Ball({ball_type:"basketball",  size:'medium', 
weight:11}); 
  instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
  }); 
 
    let instance3 = new 
  Ball({ball_type:"baseball",  size:'small', 
  weight:15}); 
    instance3.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("First object saved") 
    }); 
  } 

let reseed = false; 
if (reseed) { recreateDB();}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/balls', ballsRouter);
app.use('/resource', resourceRouter);
app.use('/gridbuild', gridRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
