const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectDB() {
    try {
        // Retrieve mongoDB URI from environment variables
        const mongoURI = process.env.MONGODB_URI;
        // Check if the URI is defined
        if(!mongoURI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }
        // Attempt to connect to the MongoDB database
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch(err) {
        console.error('MongoDB connection error: ', err.message);
        process.exit(1); // Exit the process with failure
    }
}

connectDB();

module.exports = mongoose.connection;