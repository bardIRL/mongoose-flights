const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const destinationSchema = new Schema(
  {
    airport: {
      type: String,
      enum: ["DFW", "SFO", "LAX", "DEN", "JFK", "CLT", "SJC"],
    },
    arrival: Date,
  },
  {
    timestamps: true,
  }
);

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
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);
