'use strict';

module.exports.SLACK_TOKEN          = process.env.SLACK_TOKEN || 'xoxb-18111454710-CZbIYNze2QxiQejsFOC2Fzhv';
module.exports.SLACK_AUTO_RECONNECT = true;
module.exports.SLACK_AUTO_MARK      = true;
module.exports.DB_USER              = process.env.DB_USER || 'neo4j';
module.exports.DB_PASSWORD          = process.env.DB_PASSWORD || 'password';

module.exports.MOODS = [

    'happy',
    'ok',
    'unhappy'

];

module.exports.strings = {

  SLACK_OPEN_EVENT: 'open',
  SLACK_MESSAGE_EVENT: 'message',
  SLACK_ERROR_EVENT: 'error'

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
