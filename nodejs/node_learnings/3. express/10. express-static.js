
// express-static - a built int middleware use to serve static files directly to the browser

/* 

   examples:
      css, images, js files, videos, fonts, html files

*/


const express = require("express");
const app = express();

app.use(express.static("public")); //access in url as http://localhost:5000/index.html
app.use(express.urlencoded({extended:true}))


const users = []



app.use("/submit", (req, res, next) => {
    if(!req.body.name || !req.body.age){
        res.send("input cannot be empty")
    }
    else{
        next()
    }
})



app.post("/submit", (req, res) => {
    const {name, age} = req.body;
    users.push({
        name : name,
        age : age,
    });
    res.redirect("/all")
})


app.get("/all", (req, res) => {
    res.json(users)
})



app.listen(5000)