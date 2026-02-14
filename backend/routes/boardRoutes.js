const express = require("express");
const Board = require("../models/Board");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const board = await Board.create({ title: req.body.title, userId: req.userId });
  res.json(board);
});

router.get("/", auth, async (req, res) => {
  const boards = await Board.find({ userId: req.userId });
  res.json(boards);
});

router.delete("/:id", auth, async (req, res) => {
  await Board.findByIdAndDelete(req.params.id);
  res.json({ msg: "Board deleted" });
});

module.exports = router;
