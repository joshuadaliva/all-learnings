


const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000




// 1. application level middleware - attached using app.use or app.method
app.use((req,res,next) => {
    console.log("runs for every request");
    next();
})




// 2. route level middleware - use only for specific routes, good if your accessing req.params
function checkAuth(req,res, next){
    if(req.query.admin === "true"){
        next();
    }else{
        res.send("access denined")
    }
}
app.get('/' , checkAuth, (req , res)=>{
   res.send('if ?admin=true allowed otherwise blocked')
})



// 3. for every routes checks
app.use("/admin", checkAuth) //check authentication for every admin routes
app.use(checkAuth) // for all routes check if authenticated
    




// 4. built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.Router());
app.use(express.static("public"));




// 5. error handling middleware - special middlware with 4 parameters, must be placed after routes
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).send("something went wrong")
})

app.get("/error", (req, res) => {
    throw new Error("error")
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))