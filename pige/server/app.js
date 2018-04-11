const http = require('http');
const request = require("request");
const express = require('express');
const mongoose = require('mongoose');
const roundTo = require('round-to');


mongoose.connect('mongodb://piggydata:1234@ds231229.mlab.com:31229/piggy');

goalprice = require('../screens/newgoal.js');
module.exports = goalprice;

const accountID = '5abf37cb322fa06b677937d4';

var purchaseSchema = mongoose.Schema({
  _id: String,
  amount: Number
});

var newtotalSchema = mongoose.Schema({
  total: Number
});

var urlpurchase =
'http://api.reimaginebanking.com/accounts/' + accountID + '/purchases?key=3b1eeb3b09c684ef800d53c6509a4c80';

var Purchase = mongoose.model('Purchase', purchaseSchema);

var newtotal = mongoose.model('newtotal', newtotalSchema);


setInterval(function(){
    request.get(urlpurchase, (error, response, body) => {
      var objchange = {change: 0};
      var numchange = 0;
      let objp1 = JSON.parse(body);
      var len = objp1.length;
      for(var j = 0; j<len; j++){
          let objp2 = objp1[j];
          var value = objp2.amount;
          var y = roundTo.up(value,0);
          var temp = y-value;
          var x = roundTo.up(temp, 2);
          numchange = numchange+x;
          var query = {'_id': objp2._id, 'amount': objp2.amount};
          Purchase.findOneAndUpdate(query, query, {upsert:true}, function(err, doc){
            if (err)
              return console.log('error saving to the DB');
              return console.log('saved');
          });
        }
        objchange.change = numchange;
        var query2 = {'change': objchange.change};
        newtotal.findOneAndUpdate(query2, query2, {upsert: true}, function(err, doc){
          if (err)
            return console.log('lmao saving to the DB');
          return console.log('saved');
        });
      });
}, 10000);
