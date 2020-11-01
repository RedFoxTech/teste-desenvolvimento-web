const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false})

        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = connectDB