const express = require("express");
const Todo = require("../models/Todo");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const todo = await Todo.create(req.body);
  res.json(todo);
});

router.get("/:boardId", auth, async (req, res) => {
  const todos = await Todo.find({ boardId: req.params.boardId });
  res.json(todos);
});

router.put("/:id", auth, async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

router.delete("/:id", auth, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ msg: "Todo deleted" });
});

module.exports = router;
