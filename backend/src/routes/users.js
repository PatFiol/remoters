/* eslint-disable no-unused-vars */
const express = require('express')

const router = express.Router()

const User = require('../models/user')
// const Portfolio = require('../models/portfolio')
// const Skill = require('../models/skill')
// const Work = require('../models/work')

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res) => {
  const query = {}
  if (req.query.name) {
    query.name = req.query.name
  }
  if (req.query.skills) {
    query.skill = req.query.skills
  }
  if (req.query.email) {
    query.email = req.query.email
  }
  // if (req.query.job) {
  //   query.job = req.query.job
  // }

  res.send(await User.find(query))
})

//Initialize SOME users
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

  // const javascript = await Skill.create({ title: 'javascript' })
  // const html = await Skill.create({ title: 'html' })
  // const css = await Skill.create({ title: 'css' })

  // await steve.addSkill('javascript'.Skill)
  // await patricia.addSkill('html'.Skill)
  // await patricia.addSkill('css'.Skill)

  // await steve.addJob('back end developer')
  // await armagan.addJob('software engineer')

  await armagan.save()
  await patricia.save()
  await steve.save()

  res.sendStatus(200)
})

// get ALL users ('/' endpoint)
router.get ('/:users', async (req, res) => {
  const Users = await Users
})

// GET ONE user (by Id)
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

// GET ONE user (by email)
router.get('/:email', async (req, res) => {
  const user = await User.findByEmail(req.params.email)

  if (user) res.render('email', { user })
  else res.sendStatus(404)
})

// GET SOME users (by jobTitle)
// router.get('/:jobTitle', async (req, res) => {
//   const user = await User.findByJob(req.params.job)

//   if (user) res.render('job', { user })
//   else res.sendStatus(404)
// })

// GET SOME users (by skills)
// router.get('/:skills', async (req, res) => {
//   const skills = await Skill.findBySkills(req.params.skills)
// })

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

// ADD a user (by Id)
// router.post('/:userId/adds', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   const skill = await Skill.findById(req.body.skillId)

//   await user.addSkill(skill)
//   res.sendStatus(200)
// })

// router.post('/:userId/likes', async (req, res) => {
//   const user = await User.findById(req.params.userId)
//   const work = await Work.findById(req.body.workId)

//   await user.likeWork(work)
//   res.sendStatus(200)
// })


/* DELETE */
// Delete ALL users
// router.deleteMany('/', async (req, res) => {
//   await User.deleteMany({})
//   res.send()
// })

// // Delete ONE user by email
// router.delete('/:email', async (req, res) => {
//   User.delete(req.params.email)
//   res.send()
// })

// // Delete ONE user
// router.deleteOne('/:user', (req, res) => {
//   User.deleteOne(req.params.user)
//   res.send()
// })

module.exports = router
