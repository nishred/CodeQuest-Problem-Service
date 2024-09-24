const BaseError = require("./BaseError.errors")
const {StatusCodes} = require("http-status-codes")

class NotImplemented extends BaseError {
 
   constructor(resource)
   {
     super("Not implemented",StatusCodes.NOT_IMPLEMENTED,"The method has not been implemented",{})
     this.resource = resource
   }

}

module.exports = NotImplemented



