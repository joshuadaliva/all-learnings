

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
*/


const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.get('/' , (req , res)=>{


})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))