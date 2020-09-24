//  jshint esversion:6

const express = require ("express");

const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello Bro !</h1>");
});

app.get("/contact", function(req,res){
  res.send("Send me an email : daniel.ach@hotmail.com");
});

app.get("/about",function(req,res){
  res.send("<h1>Daniel Ach</h1><br><h3>I love coding :)</h3>");
});



app.listen(3000, function(){
  console.log("server started on port 3000 bro");
});
