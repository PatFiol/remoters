const express = require('express')

const router = express.Router()

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res) => {
  res.render('index', { title: 'Remoters' })
})

router.get('/bootstrap', (req, res) => {
  res.render('bootstrap', { title: 'bootstrap' })
})

module.exports = router
