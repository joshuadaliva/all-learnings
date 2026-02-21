



// express Router - used to create modular, separate route files
// it helps you organize your app when you have many routes

const express = require("express");
const users = require("../users.js")
const app = express();



// for all users route execute the function if not switch
app.use("/users", users);

app.use((req, res, next) => {
   next(new Error("404 page not found")) //match all routes and since theres an error detected automatically jumps to error mode
})

app.use((err, req, res, next) => {
   res.send(err.message);
})


app.listen(5000, () => console.log("error"));





//users.js


const express = require("express");
const router = express.Router();

const validateQuery = (req, res, next) => {
    try {
        if(req.query.name.includes("@gmail.com")){
            next();
        }
        else{
            res.send("@gmail.com should be included")
        }
    } catch (error) {
        next(error);
    }
}


router.get("/", (req, res) => {
    res.send("all users");
})


router.get("/profile", validateQuery, (req, res) => {
    res.send("user profile");
})



module.exports = router;