var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  console.log('request made'+ req.url);

  if(req.url === '/home' || req.url === '/' ){
    res.writeHead(200, {'ContentType':'text/html'});
    fs.createReadStream(__dirname + '/index.html','utf8').pipe(res);

  }else if (req.url === '/api/ninjas'){
    res.writeHead(200, {'ContentType':'application/json'});
    var ninjas = [
      {name: 'sikamaru', age:'19'},
      {name: 'choji', age:'20'},
      {name: 'ino',  ahe:'19'}
    ]
    res.end(JSON.stringify(ninjas));

  }else if(req.url === '/contact'){
    res.writeHead(200, {'ContentType':'text/html'});
    fs.createReadStream(__dirname + '/contact.html','utf8').pipe(res);
  }else{
    res.writeHead(404, {'ContentType':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000 localhost !!');
