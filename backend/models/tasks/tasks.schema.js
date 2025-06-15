const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    target: {
        type: Number,
        required: true,
    },
    progress: {
        type: Number,
        required: true,
    },
    range_color: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Task", taskSchema);