const express = require("express")

const goalRouter = express.Router()

const {
    getGoals,
    createGoal
}= require("../controllers/goals.controller.js")

goalRouter.get("/goals", getGoals)
goalRouter.post("/goals", createGoal)

module.exports = goalRouter