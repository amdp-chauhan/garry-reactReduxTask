'use strict'

module.exports = {
  name: "DIGztr",
  version: "1.0.0",
  env: process.env.NODE_ENV || 'development',
  port: process.env.API_PORT || 3000,
  jwt: {
    secret: process.env.JWT_SECRET
  },
  db: {
    host: process.env.DB_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  stream: {
    appId: process.env.STREAM_APP_ID,
    key: process.env.STREAM_KEY,
    secret: process.env.STREAM_SECRET
  }
}
