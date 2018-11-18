const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      moment = require('moment'),
      mysql = require('mysql'),
      cors = require('cors'),
      nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database connection.
var con = mysql.createConnection({
  host     : 'catrescue.ccuxgnxok5zx.us-east-1.rds.amazonaws.com',
  user     : 'root',
  password : 'Password1234',
  port     : 3306,
  database : 'catrescue'
});


app.use(express.static('public'));

app.post('/Shelter/addCat', (request, response) => {
  // Handles submitting a new cat.

  const catObj = request.body;
  var intakeTime = moment.valueOf();

  var name = catObj.catName;
  var breed = catObj.breed;

  var sql = "INSERT INTO Cat (intakeDate, name, primaryColor, weight, fivTested, furcpDate, age, breed, sex, vaccinesUpToDate, spayNeut, behaviour, medHist, comments) VALUES ('2018-05-12', '"+name+"', 'Brown', 5, true, '2019-05-23', 5, '"+breed+"', 'Female', true, true, 'Nothing1', 'Nothing2', 'Nothing3')";

  // Execute command.
  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Successfully inserted into DB.");

    // Send email.
    sendEmail();

  });

  // Close database.
    con.close();

    // Redirect.
    response.sendFile(__dirname + '/public/Shelter/index.html');
});

app.get('/api/allcats', (req,res)=>{
  const selectAll = `SELECT * FROM Cat`;

  con.query(selectAll, (err, result)=>{
    if (err) throw err;
    console.log(result);
    res.json(result);
  });

});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/index.html');
});
app.post('/', (req, res) => {
  res.sendFile(__dirname + '/public/Shelter/index.html');
});

function sendEmail() {

    var transporter = nodemailer.createTransport({
      service: 'outlook.com',
      secureConnection: false, // TLS requires secureConnection to be false
      port: 587, // port for secure SMTP
      auth: {
        user: 'thomas-d@hotmail.ca',
        pass: 'RdUA@doAzoPiTUsAqD@K2Xi*s$r9T4'
      }
    })

    var mailOptions = {
      from: 'thomas-d@hotmail.ca',
      to: 'umbralsoul13@live.ca',
      subject: 'New Cats in Shelter',
      html: '<p>A new kitten arrived at the South Street Shelter. <bold>PLEASE</bold></p>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

};


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
