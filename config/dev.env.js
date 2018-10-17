'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_API_ENDPOINT: '"http://users.popinfo.jp/api/3.0/users/status/iphone/30f82d8d-6f1d-4acb-ae4a-d07989490581/"',
  REQUEST_TIMEOUT:'"20000"'
});
