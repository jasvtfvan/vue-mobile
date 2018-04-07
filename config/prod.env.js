'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl),
  USER_MOCK: JSON.stringify(process.env.npm_config_usemock)
}
