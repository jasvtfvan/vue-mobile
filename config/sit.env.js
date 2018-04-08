'use strict'
module.exports = {
  NODE_ENV: '"production"',
  BASE_URL: JSON.stringify(process.env.npm_config_baseurl) || '"http://localhost.sit/mock"',
  USER_MOCK: JSON.stringify(process.env.npm_config_usemock ? true : false)
}
