


// http = use to create a server as well as to send and receive http requests
// works with request and response headers

/*

    http.createServer() - to create a server and listen for an incoming request to an specified port and execute a callback
    req and res - the request and response object
    res.writeHead() - to set the response status code and headers
    res.end() - send the response and ends the connection
    server.listen() - starts the server on a specified port

    ---- common headers
        Content-Type: - media type of the content eg. text/html
        Content-Length - the length of the response body in bytes
        Location - use in redirects with 3xx status
        Set-Cookie - sets http cookies on the client
        Cache-Control - directives for client cahching
        Access-Control-Allo-Origin - for cors support

*/


// step 1: import the module
const http = require("http");
// step 2: create a server - every request will execute a callback function
const server = http.createServer((req, res) => {
    // to know what to type of data to send to the user
    res.writeHead(200, {"content-type" : "text/html"})
    if(req.url === "/home"){
        res.end("<h1> hello world</home>");
    }
    else{
        res.end("<h1> hello lord</home>");
    }

})
// step 3: listen for the request
server.listen(8080, "127.0.0.1", () => console.log("running"));






// ---------simple api




import http from "http";
import fs from "fs";
import querystring from "querystring";


http.createServer((req, res) => {
    
    if(req.url === "/home"){
        fs.readFile("index.html", (err, data) => {
            if(err){
                res.statusCode = 500;
                res.end("<h1>internal server error</h1>")
            }
            else{
                res.setHeader("Content-Type", "text/html");
                res.statusCode = 200;
                res.end(data)
            }
        });
    }else if(req.url === "/submit" && req.method === "POST"){
        let body = "";
        req.on("data", chunk => {
            // chunk data example = <Buffer 6e 61 6d 3d 4a> this is a binary data
            // conver it to string
            body += chunk.toString();
        });

        req.on("end", () => {
            // name=joshua&password=dasdasd
            // using querystring to conver to object
            const data = querystring.parse(body);
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
        });
    }

}).listen(3000)








