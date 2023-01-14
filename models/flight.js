const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United", "Delta"],
  },
  airport: {
    type: String,
    default: "SFO",
    enum: ["DFW", "SFO", "LAX", "DEN", "JFK", "CLT", "SJC"],
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  },
  seats: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
