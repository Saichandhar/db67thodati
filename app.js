var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var earphoneRouter = require('./routes/earphone');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var earphone = require("./models/earphone");
var resourceRouter = require('./routes/resource');



// We can seed the collection if needed on server start 
  async function recreateDB(){ 
  // Delete everything 
  await earphone.deleteMany(); 
 
  let instance1 = new earphone({Brand:"Samsung Galaxy",  Earphones_type:"wireless", Cost:60}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First object saved") 
       }); 
  let instance2 = new earphone({Brand:"JBL",  Earphones_type:"wireless", Cost:100}); 
  instance2.save( function(err,doc) { 
       if(err) return console.error(err); 
       console.log("Second object saved") 
        }); 
  let instance3 = new earphone({Brand:"Apple",  Earphones_type:"wired", Cost:120}); 
  instance3.save( function(err,doc) { 
        if(err) return console.error(err); 
        console.log("Third object saved") 
         }); 
}   
 
let reseed = true; 
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
app.use('/earphone', earphoneRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);


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


  const connectionString =  process.env.MONGO_CON 
  mongoose = require('mongoose'); 
  mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}); 

module.exports = app;
