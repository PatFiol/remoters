const express = require('express')
const router = express.Router()

const Work = require('../models/works')

router.get('/', async (req, res) => {
  const query = {}
  if (req.query.category) {
    query.category = req.query.category
  }
  if (req.query.type) {
    query.type = req.query.type
  }
  if (req.query.city) {
    query.city = req.query.city
  }

  res.send(await Work.find(query))
})

//Initialize SOME works
router.get('/initialize', async (req, res) => {
  const cityShop = await Work.create({
    filename: '4874999333020',
    title: 'city shop',
    description: 'website redesign for city shop',
    category: 'web design'
  })
  const bikeland = await Work.create({
    filename: '5862457954.jpg',
    title: 'bikeland',
    description: 'website created for bike shop',
    category: ['web design', 'user experience']
  })
  const supermarket = await Work.create({
    filename: 'golden',
    title: 'Supermarket Golden',
    description: 'online shop for supermarket',
    category: 'full-stack web development'
  })

  const superApp = await Work.create({
    filename: 'super-app',
    title: 'Super App',
    description: 'shopping app for supermarket',
    category: 'app development'
  })

  // await patriciasPortfolio.addWork('golden')
  // await stevesPortfolio.addWork('city shop')
  // await armagansPortfolio.addWork('bikeland')


  // patriciasPortfolio.addWork( 'super App' )

  // await armagan.save()
  // await patricia.save()
  // await steve.save()

  res.sendStatus(200)
})

module.exports = router