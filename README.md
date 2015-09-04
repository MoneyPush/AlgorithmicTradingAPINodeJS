# AlgorithmicTradingAPINodeJS

moneypush Financial market stream API in NodeJS enables to access to real-time financial quotes. This repository shows how to get the data with a NodeJS Client.

## Install Instructions

No npm install for the moment. 
Will be implemented once the package is more completed.

```
git clone https://github.com/MoneyPush/AlgorithmicTradingAPINodeJS.git
```


## Usage Instructions

Check that your 3002 port is opened and available.

The key required is available in the personal informations of your account at  [http://www.api.moneypush.com/](http://www.api.moneypush.com/)

When the clone repository is at in the same directory as your .js file, follows those instructions to get the stream: 

```javascript
callback = function(args) {
  return console.log(args);
};

var moneypush = require('./AlgorithmicTradingAPINodeJS/lib/moneypush')

KEY = 'your_32_characters_key';

moneypush.GetStream(KEY, [''], callback)

```

It is also possible to fetch all the symbols at the same time :


```javascript
callback = function(args) {
  return console.log(args);
};

var moneypush = require('./AlgorithmicTradingAPINodeJS/lib/moneypush')

KEY = 'your_32_characters_key';

moneypush.GetStream(KEY, 'AllSymbol', callback)

```
