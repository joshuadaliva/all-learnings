


// route level middleware - is a middleware thay runs only to the specific routes, not the whole application
// directly attached to all routes method like get, post, put, patch ,delete

const express = require("express");
const app = express();
const {checkAge, checkEmail, validateName} = require("../validateInfo.js");




// example1 : basic route middeware
app.get("/user/:age/:email", checkAge, checkEmail, (req, res) => {
   res.status(200).json(req.params)
});


// example2 : route middeware for post
app.post("/submit", validateName, (req, res) => {
   res.send("user created");
})





app.listen(5000, () => console.log("running on port"));

