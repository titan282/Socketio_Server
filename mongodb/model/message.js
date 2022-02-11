const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Message = new Schema({
    isFall: { type: Boolean, default: false },
    date: { type: Date, default: Date.now },
  });
module.exports = mongoose.model("Message", Message);