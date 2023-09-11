// console.log("Hello World");

// console.log(process.argv.slice(2));

// const createServer = require("http").createServer
import {createServer} from "http"

const hostName = "localhost";
const port = 5000;


const server = createServer((req,res)=> {
    res.statusCode=200;
    res.end("<h1>Hello world from our first server</h1>")
})


server.listen(port ,hostName, ()=> {
    console.log(`Server running at http://${hostName}:${port}/`)
})
