'use strict';

module.exports.DB_USER = process.env.DB_USER || 'neo4j';

module.exports.DB_PASSWORD = process.env.DB_PASSWORD || 'password';

module.exports.STRING_MIN_LENGTH = process.env.STRING_MIN_LENGTH || 1;

module.exports.STRING_MAX_LENGTH = process.env.STRING_MAX_LENGTH || 255;

module.exports.DEFAULT_OFFSET = process.env.DEFAULT_OFFSET || 0;

module.exports.DEFAULT_LIMIT = process.env.DEFAULT_LIMIT || 10;

module.exports.MAX_LIMIT = process.env.MAX_LIMIT || 100;

module.exports.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports.LOGGING_LEVEL = process.env.LOGGING_LEVEL || 'none';

module.exports.PORT = process.env.PORT || 3000;

module.exports.SECRET = process.env.SECRET || 'Az1!"#¤%&|';

// jscs:disable
module.exports.UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
// jscs:enable

module.exports.DUPLICATE_ENTRY = /duplicate key error/;

module.exports.DUPLICATE_KEY = /\$([^_]+)/;

module.exports.HOST = process.env.HOST || 'http://localhost:3000';

module.exports.statusCode = {

  ACCEPTED: 202,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  CREATED: 201,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  OK: 200

};

var textLenErr = 'text property should be in range 1 - ';
textLenErr += module.exports.STRING_MAX_LENGTH;

module.exports.strings = {

  relationships: {

    FOLLOWS: 'follows'

  },
  paths: {

    ROOT: '/',
    USER: '/v1/user',
    USERS: '/v1/users',
    LOGFILE: 'logs/baconhammer-users.log'

  },
  uuidKeys: [

    'id'

  ],
  roles: {

    CLIENT: 'client',
    ADMIN: 'admin'

  },
  USERS: 'users',
  REPORTS: 'reports',
  REPORTERS: 'reporters',
  USER: 'user',
  TARGET: 'target',
  IS_FOLLOWING: 'isFollowing',
  DEVELOPMENT: 'development',
  STRING: 'string',
  BOOLEAN: 'boolean',
  DATE: 'date',
  ID: 'id',
  ID2: 'id2',
  ENUM: 'enum',
  REPORTED: 'reported',
  UUID: 'uuid',
  ARRAY: 'array',
  NUMBER: 'number',
  PRODUCTION: 'production',
  NONE: 'none',
  MODELS: 'models',
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
  INFO: 'info',
  DEBUG: 'debug',
  WARN: 'warn',
  ERROR: 'error',
  APP_NAME: 'Baconhammer-users',
  AUTHORIZATION: 'Authorization',
  CREATED_AT: 'createdAt',
  UPDATED_AT: 'updatedAt',
  ROOT_MSG: 'The exposed routes are included in this message',
  API: 'api',
  METHOD_NOT_ALLOWED: 'The method used is not allowed for this route',
  USE_VALID_METHOD: 'Please use one of the valid methods',
  NOT_FOUND: 'Not found',
  ROUTE_DOES_NOT_EXIST: 'The route requested does not exist',
  COUNT: 'count',
  N_DELETES: 'nDeletes',
  ERR_INVALID_LOGIN: 'Invalid username or password',
  ERR_CLIENT_ID_IS_NOT_USER_ID: 'Your client id does not match this users id',
  ERR_INVALID_USER: 'Invalid user',
  ERR_DUPLICATE_KEY: 'Duplicate keys found',
  ERR_INVALID_DATE: 'Date is not valid',
  ERR_ILLEGAL_UPDATE: 'Illegal update attempted',
  ERR_TEXT_MISSING: 'text property missing',
  ERR_TEXT_LENGTH: textLenErr,
  ERR_UPDATE_FAILED: 'Update failed',
  ERR_INCLUDE_MISSING_PROPERTIES: 'Please include the required data',
  ERR_ALDREADY_REPORTED: 'Reports are restricted to one per client id',
  ERR_ALDREADY_LIKED: 'Likes are restricted to one per client id',
  ERR_NOT_UUID: 'Only uuid is allowed to indentify a resource',
  ERR_NO_CLIENT_ID: 'No client id was found to be used for liker',
  ERR_INVALID_UUID_IN_ARRAY: 'Invalid uuid found in uuid only array',
  ERR_DUPLICATE_IN_ARRAY: 'Duplicate found in unique array',
  ERR_MISSING_REQUIRED_FIELD: 'Required fields are missing',
  query: {

    FILTER: 'fieldName={?val}',
    OFFFSET: 'offset={offset}',
    LIMIT: 'limit={limit}',
    FIELD: 'field={field}',
    FIELDS: 'fields={?1,2,3}',
    Q: 'q={?query}',
    FROM: 'from={?ISODate}',
    TO: 'to={?ISODate}',
    GTE: 'gte={?number}',
    LTE: 'lte={?number}',
    SORT: 'sort={?1,2,-3}'

  },
  requiredKeys: [

    'firstName',
    'lastName',
    'birthDate',
    'gender',
    'country',
    'email',
    'username',
    'password'

  ],
  genders: [

    'male',
    'female',
    'other'

  ],
  countries: [

    'ad',
    'ae',
    'af',
    'ag',
    'ai',
    'al',
    'am',
    'an',
    'ao',
    'aq',
    'ar',
    'arpa',
    'as',
    'at',
    'au',
    'aw',
    'az',
    'ba',
    'bb',
    'bd',
    'be',
    'bf',
    'bg',
    'bh',
    'bi',
    'bj',
    'bm',
    'bn',
    'bo',
    'br',
    'bs',
    'bt',
    'bv',
    'bw',
    'by',
    'bz',
    'ca',
    'cc',
    'cf',
    'cg',
    'ch',
    'ci',
    'ck',
    'cl',
    'cm',
    'cn',
    'co',
    'com',
    'cr',
    'cs',
    'cu',
    'cv',
    'cx',
    'cy',
    'cz',
    'de',
    'dj',
    'dk',
    'dm',
    'do',
    'dz',
    'ec',
    'edu',
    'ee',
    'eg',
    'eh',
    'er',
    'es',
    'et',
    'fi',
    'fj',
    'fk',
    'fm',
    'fo',
    'fr',
    'fx',
    'ga',
    'gb',
    'gd',
    'ge',
    'gf',
    'gh',
    'gi',
    'gl',
    'gm',
    'gn',
    'gov',
    'gp',
    'gq',
    'gr',
    'gs',
    'gt',
    'gu',
    'gw',
    'gy',
    'hk',
    'hm',
    'hn',
    'hr',
    'ht',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'int',
    'io',
    'iq',
    'ir',
    'is',
    'it',
    'jm',
    'jo',
    'jp',
    'ke',
    'kg',
    'kh',
    'ki',
    'km',
    'kn',
    'kp',
    'kr',
    'kw',
    'ky',
    'kz',
    'la',
    'lb',
    'lc',
    'li',
    'lk',
    'lr',
    'ls',
    'lt',
    'lu',
    'lv',
    'ly',
    'ma',
    'mc',
    'md',
    'mg',
    'mh',
    'mil',
    'mk',
    'ml',
    'mm',
    'mn',
    'mo',
    'mp',
    'mq',
    'mr',
    'ms',
    'mt',
    'mu',
    'mv',
    'mw',
    'mx',
    'my',
    'mz',
    'na',
    'nato',
    'nc',
    'ne',
    'net',
    'nf',
    'ng',
    'ni',
    'nl',
    'no',
    'np',
    'nr',
    'nt',
    'nu',
    'nz',
    'om',
    'org',
    'pa',
    'pe',
    'pf',
    'pg',
    'ph',
    'pk',
    'pl',
    'pm',
    'pn',
    'pr',
    'pt',
    'pw',
    'py',
    'qa',
    're',
    'ro',
    'ru',
    'rw',
    'sa',
    'sb',
    'sc',
    'sd',
    'se',
    'sg',
    'sh',
    'si',
    'sj',
    'sk',
    'sl',
    'sm',
    'sn',
    'so',
    'sr',
    'st',
    'su',
    'sv',
    'sy',
    'sz',
    'tc',
    'td',
    'tf',
    'tg',
    'th',
    'tj',
    'tk',
    'tm',
    'tn',
    'to',
    'tp',
    'tr',
    'tt',
    'tv',
    'tw',
    'tz',
    'ua',
    'ug',
    'uk',
    'um',
    'us',
    'uy',
    'uz',
    'va',
    'vc',
    've',
    'vg',
    'vi',
    'vn',
    'vu',
    'wf',
    'ws',
    'ye',
    'yt',
    'yu',
    'za',
    'zm',
    'zr',
    'zw',

  ]

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
