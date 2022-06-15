const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const workSchema = new mongoose.Schema({
  filename: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: Array,
    required: true
  },
})

workSchema.loadClass(Work)
workSchema.plugin(autopopulate)

module.exports = mongoose.model('Work', workSchema)

// Notification about formats
// restriction on size and resolution
// Limit of number of 10 photos OR videos in each portfolio
// 3 portfolios maximum
