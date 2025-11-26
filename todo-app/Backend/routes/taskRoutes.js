const express = require("express");
const router = express.Router();
const { Task } = require("../db");

//Add User Task
router.post("/api/add-task", async (req, res) => {
  try {
    const { task, date } = req.body;
    console.log(req.body);

    const newTask = await Task.create({ task, date });
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Delete User Task

router.delete("/api/delete-task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
    // console.log(`error is ${error}`);
  }
});

// Edit/Update User Task
router.put("/api/edit-task/:id", async (req, res) => {
  const id = req.params.id;
  const { task, date } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { task, date });
    res.json({ message: "Task updated successfully", updatedTask });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

// export default router;
