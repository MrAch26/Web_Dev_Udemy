// jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  res.sendFile(__dirname+"/index.html");
});

app. post("/", function(req, res){


  const query = req.body.cityName;
  const appid = "5e2d05f07fdc97a29a4e426c03ab0cce";
  const units = "metric";
  const url1 = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units="+units+"";

  https.get(url1, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
      res.write("<h1>the temperature is "+temp+" degrees C in "+query+".</h1>");
      res.write("<p>the weather is "+weatherDescription+"</p>");
      res.write("<img src="+imageUrl+" >");
      res.send();

    });

  });

});




app.listen(3000, function(){
  console.log("Server 3000");
});
