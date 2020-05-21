var config = {};

if (process.env.NODE_ENV == "dev") {
  config.baseUrl = process.env.BASEURL_DEV;

  config.host = process.env.HOST_DEV;

  config.dbKey = process.env.DBKEY_DEV;

  config.connection = process.env.CONNECTION;
} else if (process.env.NODE_ENV == "prod") {
  config.baseUrl = process.env.BASEURL_PROD;

  config.host = process.env.HOST_PROD;

  config.dbKey = process.env.DBKEY_PROD;
}

config.poolId = process.env.COGNITO_POOLID;

config.clientId = process.env.COGNITO_CLIENTID;

module.exports = config;
