var http = require ('http');

var server = http.createServer(function(req, res){
  console.log('request url'+ req.url);
  res.writeHead(200, {'ContentType':'text/plain'});
  res.end('Response :)');
});

server.listen(3000,'127.0.0.1');
console.log('listening to localhost port 3000');
