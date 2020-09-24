// jshint esversion:6

const express = require("express");
const bodyParser =require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});



app.post("/", function(req, res){
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("THANK YOU its = "+ result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});


app.post("/bmicalculator",function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var results = weight/(height*height);

  res.send("Your bmi is "+results);
});


app.listen(3000, function(){
console.log("Server 3000");
});
