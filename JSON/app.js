var http = require('http');


var server = http.createServer(function (req, res) {
  console.log('request made'+ req.url);
  res.writeHead(200, {'ContentType':'application/json'});

  var myObj = {
    name : 'Ninja',
    job : 'Assassin',
    experience : 24
  };

  res.end(JSON.stringify(myObj));
});


server.listen(3000, '127.0.0.1');
console.log('listening to port 3000 localhost !!');
