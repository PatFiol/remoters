/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Portfolio = require('../models/portfolio')
const Skill = require('../models/skill')
const Work = require('../models/work')

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.skills) {
    query.age = req.query.skills
  }

  if (req.query.email) {
    query.email = req.query.email
  }

  res.send(await User.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

router.get('/initialize', async (req, res) => {
  const patricia = await User.create({
    name: 'patricia',
    email: `patricia@sample.com`,
  })
  patricia.bio = "An amazing future software engineer who doesn't know yet how to code"
  const mihri = await User.create({
    name: 'mihri',
    email: `mihri@sample.com`,
  })

  const armagan = await User.create({
    name: 'armagan',
    email: `armagan@sample.com`,
  })

  const steve = await User.create({
    name: 'steve',
    email: `steve@sample.com`,
  })

  patricia.setPassword('test')
  armagan.setPassword('test')
  steve.setPassword('test')

  const javascript = await Skill.create({ title: 'html' })
  const html = await Skill.create({ title: 'javascript' })
  const css = await Skill.create({ title: 'javascript' })

  await steve.addSkill('javascript'.Skill)
  await patricia.addSkill('html'.Skill)
  await patricia.addSkill('css'.Skill)

  res.sendStatus(200)
})

router.post('/:userId/adds', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const skill = await Skill.findById(req.body.skillId)

  await user.addSkill(skill)
  res.sendStatus(200)
})

router.post('/:userId/likes', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const work = await Work.findById(req.body.workId)

  await user.likeWork(work)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})
module.exports = router
