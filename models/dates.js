const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dates = new Schema({
  user: { type: String, required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  activity: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now() },
});

const Dates = mongoose.model("Dates", dates);

module.exports = Dates;
