

// query parameters - are ke value pair that appear after the ? url
// automatically parse by express and available in req.query
// example - search?q=express&page=2
// string by default
// common usage - filtering, pagination, search, sorting
// if you remove them and it works it has a query params


const express = require('express')
const app = express()
const port = process.env.PORT || 5000


app.get('/search' , (req , res)=>{

    const {q, page} = req.query;

    // checking the number
    if(Number.isNaN(page) && page < 1){
        res.status(404).json({
            message : "not valid"
        })
    }
    
    // if empty
    if(!q && !page){
        res.status(404).json({
            message : "not valid"
        })
        
    }

    res.status(202).json({
        q,
        page
    })

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))