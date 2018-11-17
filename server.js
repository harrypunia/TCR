const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      moment = require('moment');

const cors = require('cors');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



var testWords = ["the","of","and","to","a","in","for","is","on","that","by","this","with","i"];




app.use(express.static('public'));
app.post('/api/new-cat', (request, response) => {
  const catObj = request.body;
  console.dir(catObj);
  return response.json("Hello");
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});
app.get('/api/test', (request, response) => {
  return response.json("Hello, friend");
});
app.get('/api/words', (request, response) => {
  //USAGE: /api/words?difficulty=hello
  
  console.dir(request.query);
  var difficulty = request.query.difficulty;
  var words = [];
  
  for (var i = 0; i < difficulty.length; i++) {
    words[i] = testWords[i];
  }
  
  return response.json(words);
});



// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
});

// Error Handling middleware.
app.use((err, req, res, next) => {
  let errCode, errMessage;

  if (err.errors) {
    // mongoose validation error
    errCode = 400; // bad request
    const keys = Object.keys(err.errors);
    // report the first validation error
    errMessage = err.errors[keys[0]].message;
  } else {
    // generic or custom error
    errCode = err.status || 500;
    errMessage = err.message || 'Internal Server Error';
  }
  res.status(errCode).type('txt')
    .send(errMessage);
});

// listen for requests.
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
