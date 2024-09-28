/*const fs = require("fs")*/
import fs from "fs";
const filecontent = fs.readFileSync("./package.json")
console.log(filecontent.toString());