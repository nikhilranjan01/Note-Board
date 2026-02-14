const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    completed: Boolean,
    boardId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true } // 👈 THIS LINE
);


module.exports = mongoose.model("Todo", todoSchema);
