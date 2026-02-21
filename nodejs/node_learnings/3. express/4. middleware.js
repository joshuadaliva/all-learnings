

// middlware - are functions and backbone of express applications
// middlware has access to req, res, next
/*

    1. middleware can execute any code
    2. modify request and response object
    3. end the request response cycle
    4. call the next middleware stack 

    ------ built in middleware
    1. express.json() - parse request bodies into object
    2. express.urlencoded() - parse url encoded like in html forms into an object
    3. express.static() - serve static files
    4. express.Router() - create modular route handlers

    ------ app.use
        - to register middleware function
        - anything added using app.use will run before your final route
        - app.use([path], middlewarefunction)
        - if you forget next it will hange


    ------- global middeware best for
        - logging request
        - parsing json or URL encoded
        - setting security headers
        - server static files

*/




const express = require('express')
const app = express()
const port = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));


// ---------------------------------------------------
// using function
const validateAge = (req, res, next) => {
    if(parseInt(req.query.age) >= 18){
        res.status(200).json({message : "adult"});
        next()
    }
    else{
        res.status(200).json({message : "minor"})
        next()
    }
}


app.use(validateAge) //global middlware applies to all routes
app.use("/admin", validateAge) //for every admin routes checks age


// -----------------------------------------
app.use((req, res, next) => {
    // middlware code here
    console.log("middlware 1");
    // when you call next the next middleware will be executed,
    // if you dont call next the request and response cycle ends and not furhter middleware runs
    next();
})

app.use((req, res, next) => {
    console.log("middleware 2 ");
    next();
});

app.get("/home", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () => console.log("running"));