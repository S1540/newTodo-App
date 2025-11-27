const express = require("express");
const router = express.Router();
const { Task } = require("../db");

//Add User Task
router.post("/api/add-task", async (req, res) => {
  try {
    const { task, date } = req.body;
    console.log(req.body);

    const newTask = await Task.create({ task, date });
    res.json({
      success: true,
      message: "Task added successfully",
      data: newTask,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Delete User Task

router.delete("/api/delete-task/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });

    // console.log(`error is ${error}`);
  }
});

// Edit/Update User Task
router.put("/api/edit-task/:id", async (req, res) => {
  const id = req.params.id;
  const { task, date } = req.body;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { task, date },
      { new: true }
    );
    // console.log({ updatedTask });
    res.json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

// export default router;
