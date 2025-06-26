const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST create task
router.post('/', async (req, res) => {
  const newTask = new Task({ text: req.body.text });
  const savedTask = await newTask.save();
  res.json(savedTask);
});

// DELETE task by ID
router.delete('/:id', async (req, res) => {
  const deleted = await Task.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

module.exports = router;

