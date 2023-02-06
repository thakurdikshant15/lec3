let fs = require("fs");
fs.writeFileSync("a.html","1234");
fs.mkdirSync("a");//creates new folder a in fiven path
fs.rmdirSync("a")//removes folder
