//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
  title:String,
  content:String,
};
const Article = mongoose.model("Article", articleSchema);

// REQUEST ALL ARTICLES

app.route("/articles")

.get((req,res)=>{
  Article.find({},(err,foundArticles)=>{
    if(!err){
      res.send(foundArticles);
    } else {
      res.send(err);
    }

  });
})

.post(function(req,res){

  const newArticles = new Article ({
    title:req.body.title,
    content:req.body.content
  });
  newArticles.save(function(err){
    if(!err){
      res.send("successfuly added a new article");
    } else {
      res.send(err);
    }
  });
})

.delete(function(req,res){
  Article.deleteMany(function(err){
    if(!err){
      res.send("successfuly deleted all articles");
    } else {
      res.send(err);
    }
  });
});

// REQUEST A SPECIFIC ARTICLE

app.route("/articles/:articleTitle")

.get(function(req,res){
Article.findOne({title:req.params.articleTitle},function(err,foundArticle){
  if(foundArticle){
    res.send(foundArticle);
  } else {
    res.send("no articles found afouuuu.");
  }
});
})
.put(function (req,res){
  Article.update(
    {title:req.params.articleTitle},
    {title:req.body.title,content:req.body.content},
    {overwrite:true},
    function(err){
      if(!err){
      res.send("successfuly Updated blyad !");
      }
    });
})
.patch(function(req,res){
  Article.update(
  {title:req.params.articleTitle},
  {$set:req.body},
  function(err){
    if(!err){
      res.send("successfuly updated particulaar article");
    } else {
      res.send(err);
    }
  });
})
.delete(function(req,res){
  Article.deleteOne(
    {title:req.params.articleTitle},
    (err)=>{
      if(!err){
        res.send("successfuly deleted the article you chose");
      } else {
        res.send(err);
      }
    });
});


//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
