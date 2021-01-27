const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const note = new Schema({
  // user: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now() },
});

const Note = mongoose.model("Note", note);

module.exports = Note;
