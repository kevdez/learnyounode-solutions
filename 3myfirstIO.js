var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

var strArray = buffer.toString().split("\n");

console.log(strArray.length - 1);