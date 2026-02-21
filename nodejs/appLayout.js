
// Template Engines
// ejs - embedded js allows you to generate dynamic html

/*

    - setting the app.set("views", path) is optional express default folder is views
    - when passing data in render it is needed to be an object  
    - after submission redirect to some routes 
    - all files needs to be .ejs and needs to be inside the views folder
    - Keep reusable UI inside partials/
    - npm install ejs express-ejs-layouts to use a backgroundg

*/



const express = require("express");
const expressLayout = require("express-ejs-layouts")
const path = require("path")
const app = express();

app.use(expressLayout)
app.set("layout", "layouts/layout")
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}))

const users = [];


// no data passed
app.get("/form", (req, res) => {
    res.render("form");
})


app.get("/all", (req, res) => {
    res.render("all", {users});
})

app.post("/submit", (req, res) => {
    const {name, age} = req.body;
    users.push({name, age});
    res.redirect("/form")
})



app.listen(5000)




