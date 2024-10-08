/*const fs = require("fs")
import fs from "fs";
const filecontent = fs.readFileSync("./package.json")
console.log(filecontent.toString());*/

import http from "http"
const server= http.createServer((req, res)=>{
res.writeHead(200,{"content-type":"text/plain"});
res.end("HELLO WOLRD");


});
server.listen(3000,()=> {
    console.log("server is running on port 3000");
});fefef