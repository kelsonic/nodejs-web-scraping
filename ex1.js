var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 8000;

var url = "http://google.com";

// Example 1:
// request(url, function(err, res, body) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(body);
//   }
// })

// Example 2
// We received no message that we received the file or if there were any errors
// var destination = fs.createWriteStream('./downloads/google.html');
// request(url)
//   .pipe(destination);

// Example 3
var destination = fs.createWriteStream('./downloads/google2.html');
request(url)
  .pipe(destination)
  .on("finish", function() {
    console.log("done");
  })
  .on("error", function(err) {
    console.log(err);
  })


app.listen(port);
console.log('server is listening');
