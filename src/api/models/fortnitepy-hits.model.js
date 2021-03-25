const mongoose = require('mongoose');

const hitSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  hits: {
    type: Number,
    required: true,
  },
});

/**
 * @typedef Hit
 */
module.exports = mongoose.model('fortnitepy-hits', hitSchema);
