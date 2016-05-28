var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var item = require('./models/Item.model');

router.post('/scrape', function(req, res) {
  var url = req.body.url;

  if (url.indexOf("github") > -1) {
    request(url, function(err, resp, body) {
      console.log(url);

      if (err) {
        console.log('error scraping ');
      } else {
        var pin = {};
        var $ = cheerio.load(body);

        var $img = $("img.avatar.rounded-2").attr("src") //.attr('src')
        var $desc = $(".boxed-group.flush h3").text().match("[0-9]+")

        console.log("the image link is: " + $img, "the desc is: " + $desc)

        var pin = {
          img: $img,
          desc: $desc,
          url: url
        }

        console.log('scraped: ', pin);
        res.json(pin);
      }
    });
  } else {
    console.log('cannot locate scraper');
  }
})

module.exports = router;

//    https://github.com/kelsonic