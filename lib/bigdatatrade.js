http = require('http');

URLSTREAM = 'stream.bigdata-trade.com';

PORTSTREAM = 3002;

exports.GetStream = function(key, money, CallBack) {
  var i, m, moneyURL, options, _i, _len;
  moneyURL = '';
  if (money === 'AllSymbol') {
    moneyURL = 'AllSymbol';
  } else {
    i = 0;
    for (_i = 0, _len = money.length; _i < _len; _i++) {
      m = money[_i];
      if (i === 0) {
        moneyURL = m.replace("/", "_");
        i = 1;
      } else {
        moneyURL = moneyURL + '%2C' + m.replace("/", "_");
      }
    }
  }
  console.log;
  options = {
    hostname: URLSTREAM,
    port: PORTSTREAM,
    path: '/SubSymbol/' + key + '/' + moneyURL,
    method: 'GET'
  };
  console.log(options);
  return http.get(options, function(res) {
    res.setEncoding('utf8');
    return res.on('data', function(data) {
      return CallBack(JSON.parse(data));
    });
  });
};