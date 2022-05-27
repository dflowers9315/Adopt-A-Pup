const express = require("express");
const app = express()
const mongoose = require("mongoose");

// create connection to database
mongoose.connect('mongodb://localhost:27017/dogs')


const dogs = mongoose.connection

app.use(express.static('public'))
app.set("view engine", "hbs")

// routes
app.get("/", function(req, res){
    res.render("index.hbs")
    console.log("Index")
})


app.get("/about", function(req, res){
    res.render("about.hbs")
    console.log("about")
})
//dogs route
app.get("/dogs", function(req, res){
    dogs.find("", function(dogs){
        res.render("dogs.hbs", {
            title: 'dogs for adoption',
            dogs: dogs
        })
        console.log(dogs)
    })
})


app.listen(3000,function(){
    console.log("server started on port 3000")
})




