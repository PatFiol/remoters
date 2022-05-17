const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const workSchema = new mongoose.Schema({
  filename: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
})

module.exports = Work

// Notification about formats
// restriction on size and resolution
// Limit of number of 10 photos OR videos in each portfolio
// 3 portfolios maximum