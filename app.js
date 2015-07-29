var _ = require('underscore');
var allItems = require('./items');

var roundToCents = function(price) {
  return Math.round(price * 100) / 100;
};

var average = _.reduce(allItems, function(sum, current) {
  return sum + current.price;
}, 0) / allItems.length;

console.log(roundToCents(average));

var desiredPrices = _.filter(allItems, function(current) {
  return current.price >= 14 && current.price <= 18;
});

console.log(_.pluck(desiredPrices, 'price'));

var suchBritish = _.chain(allItems).filter(function(veryItem) {
  var important = 'GBP';

  return veryItem.currency_code === important;
}).first().value();

console.log(suchBritish.title);

var crafty = _.filter(allItems, function(item) {
  return _(item.materials).contains('wood');
});

console.log(_.pluck(crafty, 'materials'));

var allTheThings = _.filter(allItems, function(oneOfTheThings) {
  return oneOfTheThings.materials.length >= 8;
});

console.log(_.pluck(allTheThings, 'title'));

var artisinalHipsters = _.where(allItems, {who_made: 'i_did'});

console.log('Shame on ' + artisinalHipsters.length + ' people for thinking they are better than me');
