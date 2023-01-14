const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  airline: {
    type: String,
    enum: [
      "American Airlines",
      "Southwest Airlines",
      "United Airlines",
      "Delta Airlines",
    ],
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
});
