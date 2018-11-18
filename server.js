const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      moment = require('moment'),
      mysql = require('mysql'),
      cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//TODO: Fill in DB credientials.
var con = mysql.createConnection({
  host: "catrescue.ccuxgnxok5zx.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "root",
  password: "Password1234",
  database: "catrescue"
});

con.connect(function(err) {
  if (err) {
    console.log("Cannot connect to DB:\n"+err);
  };
  console.log("Connected!");

  //TODO: Parse HTML, pass into sql.

  var sql = "INSERT INTO CAT VALUES ( PetID, IntakeDate, Name, Photo, CurrentLocation, Neutered, VaccinationStatus, DOB, Breed, Color, Size, Sex, Weight, ShelterID, FosterPlacement, BehaviouralTraits, Story, AdoptionStatus, BittenStatus, NOTES )"

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});


app.use(express.static('public'));

app.post('/AddCat', (request, response) => {
  // Handles submitting a new cat.

  // Get AddCat request.
  const catObj = request.body;
  console.dir(catObj);
  
  response.sendFile(__dirname + '/public/Shelter/index.html');
  //TODO: Add to DB.
  
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
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
