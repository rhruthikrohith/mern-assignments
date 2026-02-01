function validateTitle(title) {
  if (!title) return false;
  return title.length >= 3;
}

function validatePriority(priority) {
  return priority === "low" || priority === "medium" || priority === "high";
}

function validateDueDate(date) {
  const dueDate = new Date(date);
  const today = new Date();
  return dueDate > today;
}

export { validateTitle, validatePriority, validateDueDate };
