var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var item = require('./models/Item.model');

router.post('/scrape', function(req, res) {
  var url = req.body.url;
  
  if (url.indexOf("pinterest") > -1) {
    request(url, function(err, resp, body) {
      console.log(url);

      if (err) {
        console.log('error scraping ');
      } else {
        var pin = {};
        var $ = cheerio.load(body);

        var img = $("meta[itemprop = 'image']").get(1);
        var $img = $(img).attr('content');
        var $desc = $("meta[itemprop = 'text']").attr('content');

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