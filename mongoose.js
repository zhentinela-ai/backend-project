const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = async () => {
  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URL || "mongodb://localhots/testdb"
    );
    console.log(`MongoDB: ${db.connection.name}, is connected`);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectMongoDB };
