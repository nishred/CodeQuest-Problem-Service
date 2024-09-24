const {Problem} = require("../models")

const {NotFound} = require("../errors")

class ProblemRepository {

   async createProblem(problemData)
   {
      const newProblem = await Problem.create({
        title : problemData.title,
        description : problemData.description,
        difficulty : problemData.difficulty,
        testcases : problemData.testcases
      }) 

      return newProblem
   }

   async getProblems()
   {

      const problems = await Problem.find()

      return problems

   }

   async getProblem(id)
   {

    try{
      const problem = await Problem.findById(id)
       if(!problem)
       {
            throw new NotFound("problem",id)           
       }


       return problem
    }
    catch(err)
    {
        throw err
    }

   }


   async updateProblem(id,updateData)
   {
    try{
    const updatedProblem = await Problem.findByIdAndUpdate(id, updateData, {
        new: true, // Return the updated document
        runValidators: true // Ensure that validators are run on the update
    });

    if(!updatedProblem)
    {
        throw new NotFound("problem",id)

    }


    return updatedProblem

}

   catch(err)
{
   console.log(err)

}
  
   }



   async deleteProblem(id)
   {
   
    try{
      const deletedProblem = await Problem.deleteOne({_id : id})
      if(!deletedProblem)
      {
            throw new NotFound("problem",id)
      }


      return deletedProblem
    }
    catch(err)
    {
       console.log(err)
       throw err;

    }

    

   }

   


}


module.exports = ProblemRepository