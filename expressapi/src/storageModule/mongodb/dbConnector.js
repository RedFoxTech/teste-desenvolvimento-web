const mongoose = require('mongoose');
const dotenv = require('dotenv');

const dbConnector = {}

dbConnector.connectedToMongoDB = null
dbConnector.connection = null

dbConnector.initialize = () =>
{
    // Read the file ".env"  
    dotenv.config();

    // Data base credentials 
    const { DB_CONNECTION } = process.env

    console.log('Starting connection to MongoDB...');

    mongoose.connect(
        DB_CONNECTION,
        { useNewUrlParser: true, useUnifiedTopology: true, },
        (err) =>
        {
            if (err)
            {
                dbConnector.connectedToMongoDB = false;
                console.error(`MongoDB connection error: ${err}`);
            }
        }
    );

    const { connection } = mongoose;


    connection.once('open', () =>
    {
        dbConnector.connectedToMongoDB = true;
        console.log('Connected to MongoDB');
    });

    dbConnector.connection = connection
}

dbConnector.initialize()

module.exports = dbConnector

