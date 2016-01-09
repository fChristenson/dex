'use strict';

module.exports.DB_USER = process.env.DB_USER || 'neo4j';

module.exports.DB_PASSWORD = process.env.DB_PASSWORD || 'password';

module.exports.PORT = process.env.PORT || 3000;

module.exports.statusCode = {

  CREATED: 201,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  OK: 200

};

module.exports.strings = {

  MOOD: 'mood'

};

var getDbUri = function() {

  // this is the docker default when linking containers
  if (process.env.DB_PORT) {

    return 'http://localhost:' + process.env.DB_PORT;

  }

  if (process.env.DB_URI) {

    return process.env.DB_URI;

  } else {

    return 'http://localhost:7474';

  }

};

module.exports.DB_URI = getDbUri();
