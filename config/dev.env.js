'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl) || '"http://localhost.dev/mock"',
  USER_MOCK: JSON.stringify(process.env.npm_config_usemock ? true : false)
})
