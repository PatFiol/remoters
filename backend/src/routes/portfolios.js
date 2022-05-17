const express = require('express')

const router = express.Router()
const Portfolio = require('../models/portfolio')

/* POST create a portfolio */
router.post('/', async (req, res) => {
  const createdPortfolio = await Portfolio.create(req.body)
  res.send(createdPortfolio)
})

module.exports = router
