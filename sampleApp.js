callback = function(args) {
  return console.log(args);
};

var moneypush = require('./lib/moneypush');

KEY = 'your_32_characters_key';

moneypush.GetStream(KEY, ['EUR/USD', 'EUR/CAD', 'EUR/GBP'], callback);