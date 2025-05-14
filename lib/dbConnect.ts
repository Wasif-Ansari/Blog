import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

export const dbConnect = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.log("❌ MongoDB URL:", MONGODB_URI);
        console.error("❌ MongoDB connection error:", error);
        process.exit(1);
    }
};
