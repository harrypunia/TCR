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
  
  var intakeTime = moment.valueOf();
  
  //var values = `'${intakeTime}', '${catObj.catName}', '${catObj.primaryColour}', ${catObj.catWeight}, ${catObj.fivTested}, '${catObj.fvrcpdate}', ${catObj.catAge}, '${catObj.secondaryColour}', '${catObj.gender}', ${catObj.vaccineUpToDate}, ${catObj.spayneut}, '${catObj.behaviour}', '${catObj.medHist}', '${catObj.comments}'`;
  var values = "'2018-05-12', 'Kitty', 'Brown', 5, true, '2019-05-23', 5, 'Black', 'Female', true, true, 'Nothing1', 'Nothing2', 'Nothing3'";
  var columnNames = "intakeDate, name, primaryColor, weight, fivTested, furcpDate, age, secondaryColor, sex, vaccinesUpToDate, spayNeut, behaviour, medHist, comments";
  var sql = `INSERT INTO Cat (${columnNames}) VALUES (${values})`;

  console.dir(sql);
  
  con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("Failure inserting into DB: "+result);
    });
    
    
    console.log("Successfully inserted into DB.");

  console.log('Connected to database.');
});


app.use(express.static('public'));

app.post('/Shelter/addCat', (request, response) => {
  // Handles submitting a new cat.
  
  //DB connected - parse request.
  const catObj = request.body;
  var intakeTime = moment.valueOf();
  
  //var values = `'${intakeTime}', '${catObj.catName}', '${catObj.primaryColour}', ${catObj.catWeight}, ${catObj.fivTested}, '${catObj.fvrcpdate}', ${catObj.catAge}, '${catObj.secondaryColour}', '${catObj.gender}', ${catObj.vaccineUpToDate}, ${catObj.spayneut}, '${catObj.behaviour}', '${catObj.medHist}', '${catObj.comments}'`;
  var values = "'2018-05-12', 'Kitty', 'Brown', 5, true, '2019-05-23', 5, 'Black', 'Female', true, true, 'Nothing1', 'Nothing2', 'Nothing3'";
  var columnNames = "intakeDate, name, primaryColor, weight, fivTested, furcpDate, age, secondaryColor, sex, vaccinesUpToDate, spayNeut, behaviour, medHist, comments";
  var sql = `INSERT INTO Cat (${columnNames}) VALUES (${values})`;

  console.dir(sql);
  
  con.query(sql, function (err, result) {
    if (err) throw err;
      console.log("Failure inserting into DB: "+result);
    });
    
    
    console.log("Successfully inserted into DB.");
    response.sendFile(__dirname + '/public/Shelter/index.html');  
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/index.html');
});
app.post('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/index.html');
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

mysql.close;