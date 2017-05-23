var http = require('http');//http module
var fs = require('fs'); //file system module

var myReadStream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data', function(chunk){
  console.log('new chunk');
  console.log(chunk);

  // myWriteStream.write(chunk);
});

myReadStream.pipe(myWriteStream);
