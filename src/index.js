const express = require("express")
const apiRouter = require("./routes")

const bodyParser = require("body-parser")


const errorHandler = require("./utils/errorHandler")

const {PORT,DB_URL} = require("./config/server.config")
const connectDb = require("./config/db.config")
const app = express()

app.use(bodyParser.json())

app.use("/api",apiRouter)

app.use(errorHandler)


app.listen(PORT,async () => {

    console.log("The server has started running")
    await connectDb(DB_URL)

    console.log("The connect to database has been successful")

})

