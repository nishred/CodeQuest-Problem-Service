const BaseError = require("./BaseError.errors");
const {StatusCodes} = require("http-status-codes")

class NotFound extends BaseError
{

    constructor(resource,id)
    {
       super("Not Found",StatusCodes.NOT_FOUND,"Resource not found",{resource,id})

    }

}

module.exports  = NotFound