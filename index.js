const express = require('express');
const app = express();
const porta = 443;

app.get('/FotoP1', function(req, res) {
  res.sendFile(__dirname + '/fotos/FotoP1.jpg');
});
app.get('/FotoP2', function(req, res) {
  res.sendFile(__dirname + '/fotos/FotoP2.jpg');
});
app.get('/FotoP3', function(req, res) {
  res.sendFile(__dirname + '/fotos/FotoP3.jpg');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/home.html');
})

app.get('/p1.html', function(req, res){
  res.sendFile(__dirname + '/p1.html');
})

app.get('/p2.html', function(req, res){
  res.sendFile(__dirname + '/p2.html');
})

app.get('/p3.html', function(req, res){
  res.sendFile(__dirname + '/p3.html');
})

app.listen(porta, function(){
  console.log("Servidor rodando..");
})
