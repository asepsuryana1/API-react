const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  id: Number,
  task: String,
  complete: { type: Boolean, default: false }

});


module.exports = mongoose.model('todo', todoSchema);