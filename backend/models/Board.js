const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  title: String,
  userId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Board", boardSchema);
