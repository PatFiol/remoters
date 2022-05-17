const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  works: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Work',
      autopopulate: true,
    },
  ],
})

class Portfolio {
  async addWorkToPortfolio(work) {
    this.works.push(work)
    await this.save()
  }

  async deleteWork(work) {
    this.works = this.works.find(ele => ele.id !== work.id)
    await this.save()
  }
}

portfolioSchema.loadClass(Portfolio)
portfolioSchema.plugin(autopopulate)

module.exports = mongoose.model('Portfolio', portfolioSchema)
