import mongoose from 'mongoose';

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Using existing database connection");
    return;
  }

  try {
    console.log("Establishing new database connection...");
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw new Error('Failed to connect to database');
  }
};

export default connectDb;   