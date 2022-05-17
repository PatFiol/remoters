/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const remoters = [
  { name: 'Patricia', age: 20 },
  { name: 'Eduardo', age: 18 },
]

const User = require('../models/user')
const Portfolio = require('../models/portfolio')

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', (req, res, next) => {
  res.send('respond')
})

router.get('/remoters', (req, res, next) => {
  res.send(remoters[1])
})

router.get('/initialize', async (req, res) => {
  await User.deleteMany({})
  await Portfolio.deleteMany({})

  const patricia = await User.create({
    name: 'patricia',
    email: 'patricia@patricia.com',
    password: 'password',
  })
  const armagan = await User.create({
    firstName: 'armagan',
    lastName: 'armagan',
    email: 'armagan@armagan.com',
    password: 'password',
  })

  const steve = await User.create({
    firstName: 'steve',
    lastName: 'steve',
    email: 'steve@steve.com',
    password: 'password',
  })
  steve.bio = 'An amazing fashionista with an eye for detail'

  /* const patriciasPortfolioA = await Work.create({
    name: 'Start up landing page',
    type: 'photo',
    category: 'html / Css',
  })
  const patriciasPortfolioB = await Work.create({
    title: 'UX UI',
    type: 'video',
    category: 'front-end',
  }) */

  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})
module.exports = router
