import mongoose from "mongoose";
import logger from "../logger/logger";
import 'dotenv/config'

export const initializeMongoConnection = () => {
    const mongoConnectionString = process.env.MONGO_CONNECTION_STRING || "";
    const mongoOptions =    {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        authSource: 'admin', // Specify the authentication database
        // useUnifiedTopology: true,
        // useFindAndModify: false,
        // autoIndex: true,
        // poolSize: 10, // Maintain up to 10 socket connections
        // // If not connected, return errors immediately rather than waiting for reconnect
        // bufferMaxEntries: 0,
        // connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    }

    mongoose
        .connect(mongoConnectionString, mongoOptions)
        .then(() => {
            logger.info('Mongoose connection done')

        })
        .catch((e) => {
            logger.info('Mongoose connection error')
            logger.error(e)
        })

// CONNECTION EVENTS
// When successfully connected
    mongoose.connection.on('connected', () => {
        logger.debug('Mongoose default connection open to mongodb://root:example@localhost:27017/alan')
    })

// If the connection throws an error
    mongoose.connection.on('error', (err) => {
        logger.error('Mongoose default connection error: ' + err)
    })

// When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        logger.info('Mongoose default connection disconnected')
    })

}