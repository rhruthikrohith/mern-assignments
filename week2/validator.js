// Check if title is valid
function validateTitle(title) {
  if (!title) return false;
  return title.length >= 3;
}

// Allow only valid priority values
function validatePriority(priority) {
  return priority === "low" || priority === "medium" || priority === "high";
}

// Check if due date is in the future
function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();
  return dueDate > today;
}

export { validateTitle, validatePriority, validateDueDate };

