

// application middlware - is a middleware that is attached directly to the express objecy app using
// app.use()
/*

   basic syntax
      app.use(path, middlwareFunction)



*/


const express =  require("express");
const app = express();



// example1: use the application middlware to all routes
function logger(req, res, next) {
   console.log("requext received", req.method, req.url);
   next()
}
app.use(logger) //matches all routes soo automatically this executes



// example2: middleware with paths, all paths define will run this middlware
app.use("/admin", (req, res, next) => {
   console.log("this is an admin part");
   next()
})
app.get("/admin", (req, res) => {
   res.send("admin page");
});


// example3 : real world authentication
function auth(req,res,next){
   if(req.query.user === "admin"){
      next();
   }else{
      res.send("access denied")
   }
}

app.use("/admin", auth);
app.get("/admin", (req, res) => {
   res.send("welcome admin")
})


// example 4 : 404 not found page
app.use((req, res, next) => {
   next(new Error("404 page not found")) //match all routes and since theres an error detected automatically jumps to error mode
})

app.use((err, req, res, next) => {
   res.status(404).send(err.message);
})


app.listen(5000, () => console.log("running on port 5000"));