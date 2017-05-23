var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contact.html');
});

app.get('/api/ninjas', function(req, res){
  res.send('this is the api page');
});

app.get('/profile/:name', function(req, res){
  // res.send('this is request by id:'+ req.params.name);

  var datas = { job: 'ninja', age:19, hobbies:['eating', 'playing', 'killing', 'jumping']};
  res.render('profile', {person: req.params.name, data:datas});
});

app.listen(3000);
