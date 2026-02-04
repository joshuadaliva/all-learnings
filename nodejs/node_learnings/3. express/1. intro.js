


// express = a web framework that is use to build web server and apis
// to install express use npm install express

// nodemon - allows your server to refresh if changes detected
// npm install nodemon
// inside the package.json define the "start": "nodemon app.js"


/*

    --------res.send()

    res.send("Hello");          // text/html
    res.send("<h1>Hi</h1>");    // text/html
    res.send({ a: 1 });         // application/json
    res.send([1, 2, 3]);        // application/json
    res.send(Buffer.from("Hi")) // application/octet-stream

    Express figures out the Content-Type for you.
    Ends the response automatically
    Handles status codes

    ---------- how to application works
    app.listen() is the entry point that opens the server.
    When someone hits the location (URL), Node receives the request,
    then Express decides which route it should go to.


    app.get()
    app.post()
    app.put()
    app.patch()
    app.delete()
    app.all()


*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(3000, () => {
    return console.log("hello world");
});

