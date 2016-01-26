var http =		require('http');

URLSTREAM =		'stream.moneypush.com';
PORTSTREAM =	3002;

exports.GetStream = function(key, money, CallBack) {
  var i, m, moneyURL, options, _i, _len;
  var dataTmp, data;
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
  options = {
    hostname: URLSTREAM,
    port: PORTSTREAM,
    path: '/SubSymbol/' + key + '/' + moneyURL,
    method: 'GET'
  };
  return http.get(options, function(res) {
    res.setEncoding('utf8');
	dataTmp = '';
    return res.on('data', function(data_) {
	  if (data_ === undefined) return ;
	  dataTmp = dataTmp + data_.trim();
	  if (dataTmp[0] === "{" && dataTmp[dataTmp.length - 1] === "}")
	  {
		  data = JSON.parse(dataTmp);
		  dataTmp = '';
		  return CallBack(data);
	  }
    });
  });
};
