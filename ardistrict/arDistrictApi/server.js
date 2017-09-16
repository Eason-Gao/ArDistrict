var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  task = require('./api/models/todoListModel'), //created model loading here

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
