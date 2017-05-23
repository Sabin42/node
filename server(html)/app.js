var http = require ('http');
var fs = require ('fs');

var server = http.createServer(function(req, res){
  console.log('request url'+ req.url);
  res.writeHead(200, {'ContentType':'text/html'}); //Response of html page so (text/html)
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  readStream.pipe(res);
});


server.listen(3000,'127.0.0.1');
console.log('listening to localhost port 3000');
