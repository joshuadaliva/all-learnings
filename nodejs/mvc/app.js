



const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;
const expressLayout = require("express-ejs-layouts");
const userRoutes = require("./routes/userRoutes.js")
const adminRoutes = require("./routes/adminRoutes.js")
app.use(expressLayout);
app.set("layout", "layouts/layout");
app.set("view engine", "ejs");




app.use("/user", userRoutes)
app.use("/admin", adminRoutes)




app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))