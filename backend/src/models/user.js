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
  },
  // job: {
  //   type: String,
  //   required: true,
  // },
  bio: String,
  city: String,
  // skills: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Skills',
  //     autopopulate: true,
  //   },
  // ],
})

// A portfolio can be created adding photos or videos to it.

class User {
  async addName (name) {
    this.name = name
    // await this.save()
  }
  async addJob(job) {
    this.job = job
    // await this.save()
  }
  async addCity(city) {
    this.city = city
    // await this.save()
  }
  async addBio(bio) {
    this.bio = bio
    // await this.save()
  }
  async addSkills(skill) {
    this.skills.push(skill)

    // await skill.save()
    // await this.save()
  }

  addPortfolio(portfolio) {
    this.portfolios.push(portfolio)
    // await this.save()
  }

  addConnection(connection) {
    this.connection.push(connection.profileName)
  }

  likeWork(work) {
    this.likes.push(work.filename)
    work.likedBy.push(this.name)
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)
userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
})

module.exports = mongoose.model('User', userSchema)
