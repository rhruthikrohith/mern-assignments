import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskId = 1;

// Add a new task
function addTask(title, priority, dueDate) {
  if (!validateTitle(title)) return "Invalid title";
  if (!validatePriority(priority)) return "Invalid priority";
  if (!validateDueDate(dueDate)) return "Invalid due date";

  let task = {};
  task.id = taskId;
  task.title = title;
  task.priority = priority;
  task.dueDate = dueDate;
  task.completed = false;

  taskId = taskId + 1;
  tasks[tasks.length] = task;

  return "Task added successfully";
}

// Return all tasks
function getAllTasks() {
  return tasks;
}

// Mark a task as completed
function completeTask(taskId) {
  let task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = true;
    return "Task completed";
  }

  return "Task not found";
}

export { addTask, getAllTasks, completeTask };
