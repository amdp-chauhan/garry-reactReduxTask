const Router = require('express').Router
var router = Router()

router.get('/', (req, res) => {
  res.json('BLAH')
})

router.post('/', (req, res) => {
  res.json('POST')
})


module.exports = router
