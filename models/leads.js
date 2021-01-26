const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leads = new Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true},
  phone: { type: String, required: true},
  image: { type: String, required: true }
});

const Leads = mongoose.model("Leads", leads);

module.exports = Leads;