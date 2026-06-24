import mongoose from 'mongoose'

// Cache connection across serverless function invocations
let isConnected = false;

const connectDB = async () => {
    if (isConnected) return;

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI environment variable is not set');
    }

    try {
        await mongoose.connect(`${process.env.MONGO_URI}/book-my-room`, {
            serverSelectionTimeoutMS: 10000,
            socketTimeoutMS: 45000,
        });
        isConnected = true;
        console.log("Database successfully connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

export default connectDB
