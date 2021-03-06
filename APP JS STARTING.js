//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});


// OR ------


// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.get("/", function(req,res){
  res.send("HEYEYEYYYY");
});

app.listen(process.env.PORT||3000, function(){
  console.log("Server 3000");
});
