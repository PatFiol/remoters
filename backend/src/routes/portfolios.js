const express = require('express')

const router = express.Router()
const Portfolio = require('../models/portfolio')

/* POST create a portfolio */
router.post('/', async (req, res) => {
  const createdPortfolio = await Portfolio.create(req.body)
  res.send(createdPortfolio)
})

// router.get('/', async (req, res) => {
//   const query = {}
//   if (req.query.name) {
//     query.name = req.query.name
//   }
//   if (req.query.skills) {
//     query.skill = req.query.skills
//   }
//   if (req.query.email) {
//     query.email = req.query.email
//   }
//   if (req.query.job) {
//     query.job = req.query.job
//   }

//   res.send(await User.find(query))
// })

//Initialize SOME users
router.get('/initialize', async (req, res) => {
  const portfolio = await Portfolio.create({
    title: 'Portfolio',
    description: 'portfolio from me',
    works: '',
  })

  // const mihri = await User.create({
  //   title: '',
  //   description: '',
  //   works: '',
  // })

  // const armagan = await User.create({
  //   title: '',
  //   description: '',
  //   works: '',
  // })

  // const steve = await Portfolio.create({
  //   title: '',
  //   description: '',
  //   works: '',
  // })

  // await patriciasPortfolio.addWork('golden')
  // await stevesPortfolio.addWork('city shop')
  // await armagansPortfolio.addWork('bikeland')


  // await steve.addPortfolio('')
  // await armagan.addPortfolio('')

  // await portfolioOne.save()
  // await portfolioTwo.save()
  // await portfolioThree.save()

  res.sendStatus(200)
})

module.exports = router
