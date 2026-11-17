
const tasks = [
  {
    id: 1,
    title: "Fix Login",
    status: "open"
  },
  {
    id: 2,
    title: "Add tests",
    status: "done"
  },
  {
    id: 3,
    title: "Update API",
    status: "open"
  },
  {
    id: 4,
    title: "Debug API",
    status: "pending"
  }
];

function getTasksByStatus(tasks, status) {
  if (!status) {
    return tasks;
  }

  return tasks.filter((task) => {
    return task.status === status;
  });
}

// Test cases
console.log("Open tasks:", getTasksByStatus(tasks, "open"));

console.log("Done tasks:", getTasksByStatus(tasks, "done"));

console.log("All tasks:", getTasksByStatus(tasks, ""));

// original array
console.log("Original tasks:", tasks);
