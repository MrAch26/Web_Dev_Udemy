// jshint esversion:6

require('dotenv').config()

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// AUSSI POSSIBLE BRAVO DONNIEL !

// app.get('/success.html', function(req, res) {
//   res.sendFile(__dirname + "/" + "success.html");
// });
//
// app.get('/images/icon-A.png', function(req, res){
//   res.sendFile(__dirname + "/" + "images/icon-A.png");
// });



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/" + "signup.html");
});

app.post("/", function(req, res) {

  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const eMail =req.body.eMail;

  const data = {
    members: [
      {
        email_address: eMail,
        status: "subscribed",
        merge_fields :{
          FNAME:firstName,
          LNAME:lastName,
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us4.api.mailchimp.com/3.0/lists/cffe9bf03b";

  const option ={
    method: "POST",
    auth: "MrAch26:"+process.env.API_KEY
  };

  const request = https.request(url,option,function(response){

    if (response.statusCode===200){
      res.sendFile(__dirname+"/"+"success.html");
    } else {
      res.sendFile(__dirname+"/"+"failure.html");
    }

    response.on("data", function(data){
      console.log(JSON.parse(data));

    });
  });
 request.write(jsonData);
 request.end();

});

app.post("/failure", function(req,res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Serveur 3000");
});