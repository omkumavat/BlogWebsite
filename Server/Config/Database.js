import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable.");
}

// In development (or even in production serverless functions), caching the connection helps avoid
// reconnecting on every function invocation.
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Increase timeouts to allow more time for the connection to establish
      connectTimeoutMS: 60000,
      serverSelectionTimeoutMS: 60000,
    };
    cached.promise = mongoose.connect(MONGO_URI, options).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectDB;
