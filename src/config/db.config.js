const mongoose = require("mongoose")


async function connectDb(DB_URL)
{
    await mongoose.connect(DB_URL)
}

module.exports = connectDb