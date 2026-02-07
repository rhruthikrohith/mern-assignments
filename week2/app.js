// Import required functions from task.js
// addTask    → adds a new task
// getAllTasks → returns all existing tasks
// completeTask → marks a task as completed using task id
import { addTask, getAllTasks, completeTask } from "./task.js";

// Add a new task to learn JavaScript
console.log(addTask("Learn JavaScript", "high", "2026-12-01"));

// Add another task to practice MERN stack
console.log(addTask("Practice MERN", "medium", "2026-12-10"));

// Display all tasks after adding them
console.log(getAllTasks());

// Mark the task with id 1 as completed
console.log(completeTask(1));

// Display all tasks again to verify the update
console.log(getAllTasks());
