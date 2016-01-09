'use strict';

var app = require('./app');
var port = process.env.DEX_PORT || 3000;

app.listen(port, function() {

  console.log('Server started on port', port);

});
