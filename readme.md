# add-ellipsis [![Build Status](https://travis-ci.org/arthurvr/add-ellipsis.svg?branch=master)](https://travis-ci.org/arthurvr/add-ellipsis)

> Cut off a string to a specified length and add an ellipsis


## Install

```
$ npm install --save add-ellipsis
```


## Usage

```js
var addEllipsis = require('add-ellipsis');

addEllipsis('unicorns');
//=> unicorns…

addEllipsis('Lorem ipsum dolor sit amet', 21);
//=> 'Lorem ipsum dolor sit…'
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
