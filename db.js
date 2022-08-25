const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB: ${db.connection.name}, is connected`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
