const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dates = new Schema({
  user: { type: String, required: true },
  date: { type: String, required: true },
  activity: { type: String, required: true },
});

const Dates = mongoose.model("Dates", dates);

module.exports = dates;
