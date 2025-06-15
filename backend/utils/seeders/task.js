const Task = require("../../models/tasks/tasks.schema.js");
const json = require("../taskSeeder.json");

const taskSeeder = () => {
    console.log("Seeding tasks...");

    json.tasks.forEach(async (task) => {
        const newTask = new Task(task);
        await newTask.save();
    });

    console.log("Tasks seeded successfully");
    
}

module.exports = taskSeeder