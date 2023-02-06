const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta'],
  },
  airport: {
    type: String,
    enum: ['MCO', 'LAX', 'DEN', 'LIT', 'FAT'],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    
  }
});

module.exports = mongoose.model('Flight', movieSchema);