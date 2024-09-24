const express = require("express")

const {problemController} = require("../../controllers/index")

const problemRouter = express.Router()


problemRouter.get("/",problemController.getProblems)

problemRouter.get("/:id",problemController.getProblem)

problemRouter.post("/",problemController.createProblem)

problemRouter.put("/:id",problemController.updateProblem)

problemRouter.delete("/:id",problemController.deleteProblem)

module.exports = problemRouter

