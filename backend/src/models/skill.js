const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const skillSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
})

skillSchema.plugin(autopopulate)

module.exports = mongoose.model('Skill', skillSchema)
