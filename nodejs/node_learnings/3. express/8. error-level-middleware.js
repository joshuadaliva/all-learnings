


// error handling middleware - a special middleware use to catch and handle errors in your express app
// it has 4 parameters function(err, req, res , next)
// error middleware must be placed last 
// next(error) is important

/*

   Catch runtime errors
   Format error responses
   Log issues
   Prevent application crashes
   Maintain consistent API responses

*/

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


app.get("/age/:age", (req, res, next) => {
   if(parseInt(req.params.age) < 18){
      next(new Error("not an adult"));
   }
   res.send("adult")
})


app.get("/async-error", (req, res, next) => {
   try{
      const result = notExist();
      res.status(200).send(result)
   }catch(error){
      next(error)
   }
})



app.use((err, req , res , next) => {
   console.log(err.stack);
   res.status(500).json({
      success: false,
      message : err.message
   })
});






app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))