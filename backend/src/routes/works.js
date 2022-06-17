const express = require('express')
const router = express.Router()

const Work = require('../models/work')

router.get('/', async (req, res) => {
  const query = {}
  if (req.query.category) {
    query.category = req.query.category
  }
  // if (req.query.city) {
  //   query.city = req.query.city
  // }

  res.send(await Work.find(query))
})

//Initialize SOME works
router.get('/initialize', async (req, res) => {
  await Work.deleteMany({})

  const cityShop = await Work.create({
    filename: '58962485495844',
    title: 'city shop',
    description: 'website redesign for city shop',
    category: 'web design',
  })

  await cityShop.save()

  const bikeland = await Work.create({
    filename: '5862457954.jpg',
    title: 'bikeland',
    description: 'website created for bike shop',
    category: ['web design', 'user experience']
  })
  await bikeland.save()

  const supermarket = await Work.create({
    filename: 'golden',
    title: 'Supermarket Golden',
    description: 'online shop for supermarket',
    category: 'full-stack'
  })
  await supermarket.save()

  const superApp = await Work.create({
    filename: 'super-app',
    title: 'Super App',
    description: 'shopping app for supermarket',
    category: 'app development'
  })
  superApp.description = 'update to the website'

  await superApp.save()

res.send('nothing to show here')
})

// get ALL works ('/' endpoint)
router.get('/', async (req, res) => {
  const works = await works.find({})
  res.send(users)

  res.sendStatus(200)
})

// Get SOME works by CATEGORY
router.get('/works/:works', async (req, res) => {
  const query = {}

  if (req.query.category) {
    query.category = req.query.category
  }
  res.send(await Work.find(query))
})

/* POST create a product */
router.post('/', async (req, res) => {
  const createdWork = await Work.create(req.body)
  res.send(createdWork)
})

/* DELETE works */
router.delete('/', async (req, res) => {
  await Work.deleteMany({})

  res.sendStatus(200)
})

/* DELETE a work */
router.delete('/work/:work', async (req, res) => {
  console.log(req.params.work)

  await Work.deleteOne({ work: req.params.work })

  res.sendStatus(200)
})

module.exports = router
