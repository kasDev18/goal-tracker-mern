const Tasks = require("../models/tasks/tasks.schema");

const getGoals = async(req, res) => {
    try {
        const tasks = await Tasks.find({}).sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createGoal = async(req, res) => {
    try {
        const { description, target, progress, range_color } = req.body;
        
        const goal = new Tasks({
            description,
            target,
            progress,
            range_color,
            percentage: (Math.round((progress / target) * 100)).toFixed(0)
        });
        await goal.save();

        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getGoals,
    createGoal
}