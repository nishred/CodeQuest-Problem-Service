const {NotImplemented} = require("../errors")

const {ProblemRepository} = require("../repositories")

const {ProblemService} = require("../Services")

const {StatusCodes} = require("http-status-codes")


const problemService = new ProblemService(new ProblemRepository())
 


async function getProblems(req,res,next)
{
    try {
  
       const problems = await problemService.getProblems()

       res.status(StatusCodes.OK).json({
          success : true,
          message : "Retrieved problems successfully",
          data : problems
       })

    }
    catch(err)
    {
        next(err)
    }

}


async function getProblem(req,res,next)
{

    try {


      const problem = await problemService.getProblem(req.params.id)


      res.status(StatusCodes.OK).json({
        success : true,
        message : "Retrieved problem successfully",
        data : problem
     })
    }
    catch(err)
    {
       next(err)
    }

}


async function createProblem(req,res,next)
{

    try {

        const problem = await problemService.createProblem(req.body)

        res.status(StatusCodes.OK).json({
            success : true,
            message : "Created problem successfully",
            data : problem
         })

    }
    catch(err)
    {
       next(err)
    }

}



async function updateProblem(req,res,next)
{

    try {
      const problem = await problemService.updateProblem(req.params.id,req.body)
      res.status(StatusCodes.OK).json({
        success : true,
        message : "updated problem successfully",
        data : problem
     })
    

    }
    catch(err)
    {
       next(err)
    }

}


async function deleteProblem(req,res,next)
{

    try {

       const problem = await problemService.deleteProblem(req.params.id)

       res.status(StatusCodes.OK).json({
        success : true,
        message : "deleted problem successfully",
        data : problem
     })
    

    }
    catch(err)
    {
       next(err)
    }

}

module.exports = {

  getProblems,
  getProblem,
  createProblem,
  updateProblem,
  deleteProblem,

}