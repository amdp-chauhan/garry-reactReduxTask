module.exports = {
  api: {
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:8000'
  },
  imgix: {
    baseUrl: process.env.REACT_APP_IMGIX_URL
  }
}
