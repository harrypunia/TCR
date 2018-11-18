const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      moment = require('moment'),
      mysql = require('mysql'),
      cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var con = mysql.createConnection({
  host     : 'catrescue.ccuxgnxok5zx.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'Password1234',
  port     : 3306,
  database : 'catrescue'
});

con.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});


app.use(express.static('public'));

app.post('/AddCat', (request, response) => {
  // Handles submitting a new cat.
  //DB connected - parse request.
  const catObj = request.body;
  console.dir(catObj);

  var values = `${moment().valueOf()}, ${catObj.catName}, ${catObj.primaryColour}, ${catObj.catWeight}, ${catObj.fivTested}, ${catObj.fvrcpdate}, ${catObj.catAge}, ${catObj.secondaryColour}, ${catObj.gender}, ${catObj.vaccineUpToDate}, ${catObj.spayneut}, ${catObj.behaviour}, ${catObj.medHist}, ${catObj.comments}`;

  var columnNames = "intakeDate, name, primaryColor, weight, fivTested, furcpDate, age, secondaryColor, sex,
    spayNeut, breed, vaccinesUpToDate, behaviour,  medHist, bittenHistory, comments";

  var sql = `INSERT INTO Cat (${columnNames}) VALUES (${values})`;

  con.query(sql, function (err, result) {
    if (err) throw err;
      console.log(result);
    });
   response.sendFile(__dirname + '/public/Shelter/index.html');
  // return response.json("Looks like the cat's out of the bag now.");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/addCat.html');
});
app.post('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/addCat.html');
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
var listener = app.listen(3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});