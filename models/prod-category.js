
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const Category = new Schema({
  categoryName:String,
  categoryCode:String,
  
})
module.exports = mongoose.model('category',Category)