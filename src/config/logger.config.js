const winston = require("winston")


const allowedTransports = []

allowedTransports.push(new winston.transports.Console())

allowedTransports.push(new winston.transports.File({
    filename : `app.log`
}))


const logger = winston.createLogger({

    format : winston.format.combine(

      winston.format.timestamp({
        format : "YYYY-MM-DD HH:mm:ss"
      }),

      winston.format.printf((log) => {

         return `${log.timestamp} [${log.level}] ${log.message}` 

      })


    ),
    transports : allowedTransports
})



module.exports = logger