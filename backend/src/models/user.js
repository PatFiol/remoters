const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  job: {
    type: String,

  },
  bio: String,
  city: String,
  skills: Array,
  portfolio: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Work',
      autopopulate: true,
    }
  ]
})


class User {
  async addName (name) {
    this.name = name
    await this.save()
  }
  async addJob(job) {
    this.job = job
    await this.save()
  }
  async addCity(city) {
    this.city = city
    await this.save()
  }
  async addBio(bio) {
    this.bio = bio
    await this.save()
  }
  async addSkill(skill) {
    this.skills.push(skill)

    await skill.save()
    await this.save()
  }
  async createPortfolio(portfolio) {
    this.portfolios.push(portfolio)
    await this.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
