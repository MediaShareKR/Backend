var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({result: true, messages: 'Hello, World!'})
})

module.exports = router
