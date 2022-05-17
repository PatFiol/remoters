const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    // required: true,
  },
  email: {
    type: String,
    unique: true,
    // required: true,
  },
  password: {
    type: String,
    unique: true,
    // required: true,
  },
  jobTitle: {
    type: String,
    // required: true,
  },
  bio: {
    type: String,
    // required: true,
  },
  skills: {
    type: [],
    // required: true,
  },
})

// A portfolio can be created adding photos or videos to it.

class User {
  async addBio(bio) {
    this.bio = bio
    await this.save()
  }

  addSkills(skills) {
    this.skills.push(skills)
  }

  addPortfolio(portfolio) {
    this.portfolios.push(portfolio)
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

module.exports = mongoose.model('User', userSchema)
