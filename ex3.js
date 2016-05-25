var express = require('express');
var path = require('path');
var swig = require('swig');
var request = require ('request');
var cheerio = require('cheerio');
var _ = require('lodash');
var bodyParser = require('body-parser');
var port = 8080;

var app = express();

app.engine('html', swig.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function() {
  console.log('running server on port ' + port);
})