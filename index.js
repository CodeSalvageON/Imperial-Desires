const fs = require('fs');
const express = require('express');

const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

let compArr = [];

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/getarr', function (req, res) {
  res.send(JSON.stringify(compArr));
});

app.post('/joinarr', function (req, res) {
  let compname = req.body.name;

  if (compname === null || compname === "" || compname === undefined) {
    compname = "Dumb Desert Tribe #" + String(Math.floor(Math.random() * 50000));
  }

  if (String(compArr).includes(compname)) {
    compname = "Dumb Desert Tribe #" + String(Math.floor(Math.random() * 50000));
  }

  compArr.push(compname + ";p{]10");
  res.send("success");
});


app.post("/modarr", function (req, res) {
  let oogabooga = req.body.cards;
  let conc = req.body.num;

  let conch = compArr[oogabooga].split(";p{]");
  let conch1 = conch[0];

  compArr[oogabooga] = conch1 + ";p{]" + String(conc);
  res.send("success");
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});