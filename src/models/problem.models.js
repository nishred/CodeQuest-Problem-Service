const mongoose = require("mongoose")

const problemSchema = new mongoose.Schema({

   title : {type:String, required : true},
   description : {type : String,required : true},
   difficulty : {
 
      type : String,
      required : true,
      enum : ["easy","medium","hard"]

   },

   testcases : [{
     input : {
        type : String,
        required : true
     },
     output : {
       type : String,
       required : true
     }


   }],

   editorial : String

})


const Problem = mongoose.model("problems",problemSchema)



module.exports = Problem
