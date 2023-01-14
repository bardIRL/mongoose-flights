const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema(
  {
    airline: {
      type: String,
      required: true,
      enum: ["American", "Southwest", "United", "Delta"],
    },
    airport: {
      type: String,
      required: true,
      default: "SFO",
      enum: ["DFW", "SFO", "LAX", "DEN", "JFK", "CLT", "SJC"],
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
    },
    departs: {
      type: Date,
      required: true,
      default: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },
    seats: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
