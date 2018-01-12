'use strict'

module.exports = {
  name: "DIGztr",
  version: "1.0.0",
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
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
  },
  facebookAuth : {
    clientID: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV==='development'?'http://localhost:3000/listings':'https://digztr.herokuapp.com/listings',
    profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
    profileFields: ['id', 'email', 'name']
  }
}
