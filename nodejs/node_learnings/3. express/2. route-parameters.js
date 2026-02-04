



// route parameters - are named url segments that capture values at specific position in the url
// example : /users/:userID/books/:bookId


/*

    1.  use middleware of validation for cleaner way to validate them
    2.  use express-validator
    3.  use unguessable id
    4. use rate limiting
    5. even if the user request for them validate first 

*/



const express = require('express')
const app = express()

app.get('/user/:userId/book/:bookId' , (req , res)=>{

    // check existence
    if(!req.params.id){
        res.status(404).json({
            message: "id is required"
        })
    }

    // validate numerid id
    if(Number.isNaN(id)){
        res.status(404).json({
            message: "id is notvalid"
        })
    }


    const {userId, bookId} = req.params;
    res.send(`userId: ${userId} <br> bookId ${bookId}`);
})


app.listen(3000 , ()=> console.log('> Server is up and running on 3000 : ' + 3000))