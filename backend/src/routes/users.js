const express = require('express')
const router = express.Router()

const User = require('../models/user')

//Initialize SOME users
router.get('/initialize', async (req, res) => {
  const patricia = await User.create({
    name: 'bionur',
    email: `bionur@sample.com`,
    job: 'full-stack developer',
  })

  const mihri = await User.create({
    name: 'jsmihri',
    email: `jsmihri@sample.com`,
    job: 'full-stack developer',
  })

  const armagan = await User.create({
    name: 'hharmagan',
    email: `hharmagan@sample.com`,
    job: 'software engineer',
  })

  const steve = await User.create({
    name: 'catsteve',
    email: `catsteve@sample.com`,
    job: 'backend developer',
  })

  patricia.setPassword('test')
  armagan.setPassword('test')
  steve.setPassword('test')

  // const javascript = await Skill.create({ title: 'javascript' })
  // const html = await Skill.create({ title: 'html' })
  // const css = await Skill.create({ title: 'css' })

  await steve.addSkill('javascript')
  await patricia.addSkill('html')
  await patricia.addSkill('css')

  // await steve.addJob('back end developer')
  // await armagan.addJob('software engineer')

  await armagan.save()
  await patricia.save()
  await steve.save()

  res.sendStatus(200)
})

// get ALL users ('/' endpoint)
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.send(users)
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

// GET ONE user (by Id)
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

// GET ONE user (by email)
router.get('/email/:email', async (req, res) => {
  const { email } = req.params

  res.send(await User.find({ email }))
})

// GET SOME users (by job)
router.get('/job/:job', async (req, res) => {
  const { job } = req.params

  res.send(await User.find({ job }))
})

// GET SOME users (by city)
router.get('/city/:city', async (req, res) => {
  const { city } = req.params

  res.send(await User.find({ city }))
})


// GET SOME users (by skills)
router.get('/skills/:skills', async (req, res) => {
  if (!req.params) return res.sendStatus(400)

  const skl = req.params

  const users = await User.find({})

  const searchedSkills = users.filter((user, idx) => user.skills.includes(skl.skills))

  // res.send(searchedSkills)
  res.send(await User.find({ skills: req.params.skills }, {_id: 0, name: 1, skills: 1}))
})


/* Here is the 'pure mongodb' version:

router.get('/skills/:skills', async (req, res) => {
  if (!req.params) return res.sendStatus(400)

  res.send(await User.find({ skills: req.params.skills }))
}) */


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
router.delete('/', async function (req, res) {
  await User.deleteMany()

  res.sendStatus(200)
})

// Delete ONE user by id
router.delete('/:id', async function (req, res) {
  await User.findByIdAndDelete(req.params.id)

  res.sendStatus(200)
})

// Delete ONE user by email
router.delete('/:email', async function (req, res) {
  await User.find(req.params.email)

  res.sendStatus(200)
})

// Update users
router.patch('/:id', async function (req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    email: req.body.email,
  })

  res.send(user)
})

module.exports = router
