const BaseError = require("../errors/BaseError.errors")
const {StatusCodes} = require("http-status-codes")


function errorHandler(err,req,res,next)
{
   
    if(err instanceof BaseError)
    {
        return res.status(err.statusCode).json({

           success : false,
           message : "The request was not successfull",
           error : err.name,
           details : (err.details?err.details : {})
        })
    }

    res.status(StatusCodes.BAD_REQUEST).json({

       success : false,
       message : "The request was not successfull",
       error : "Something went wrong",
       details : {}
    })

}


module.exports = errorHandler