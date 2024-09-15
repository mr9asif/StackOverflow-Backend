const mongoose = require('mongoose');

// MongoDB connection URL
const MongoUrl = process.env.MONGODB_URL || "mongodb+srv://StackOverFlow:Asif1234@cluster0.p7hqbnv.mongodb.net/StackDB";

// Function to connect to MongoDB
const mongoDBConnect = async () => {
  try {
    await mongoose.connect(MongoUrl, );
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.log("MongoDB Connection Failed!", err);
    // process.exit(1); // Exit process if connection fails
  }
};

// Export the function
module.exports = mongoDBConnect;
