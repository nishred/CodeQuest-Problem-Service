
class ProblemService {


   constructor(problemRepository)
   {
    this.problemRepository = problemRepository
   }



    async createProblem(problemData)
    {
       const problem =   await this.problemRepository.createProblem(problemData)
       return problem

    }


    async getProblems()
    {
      const problems = await this.problemRepository.getProblems()

      return problems
    }


    async getProblem(id)
    {
        
        const problem = await this.problemRepository.getProblem(id)

 
        return problem

    }

    async updateProblem(id,problemData)
    {

       const problem = await this.problemRepository.updateProblem(id,problemData)

       return problem


    }


    async deleteProblem(id)
    {
      const problem = await this.problemRepository.deleteProblem(id)

        return problem
      

    }


}


module.exports  = ProblemService