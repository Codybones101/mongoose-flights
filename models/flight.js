const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['ORD', 'JFK', 'DFW', 'AUS', 'SAN'],
  },
  arrival: {
    type: Date,
  },
});

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
    default: function() {
      let today = new Date();
      return today.setFullYear(today.getFullYear() + 1);
    }
  },
  destinations: [destinationSchema],
});

module.exports = mongoose.model('Flight', flightSchema);