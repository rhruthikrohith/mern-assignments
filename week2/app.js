import { addTask, getAllTasks, completeTask } from "./task.js";
console.log(addTask("Learn JavaScript", "high", "2026-12-01"));
console.log(addTask("Practice MERN", "medium", "2026-12-10"));
console.log(getAllTasks());
console.log(completeTask(1));
console.log(getAllTasks());
