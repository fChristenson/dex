'use strict';

var app       = require('./app');
var constants = require('./app/config/constants.js');

app.listen(constants.PORT, function() {

  console.log('Server started on port', constants.PORT);

});
