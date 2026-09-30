const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rent_management';
    const c = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${c.connection.host}`);
  } catch (e) {
    console.error('MongoDB connection failed:', e.message);
    process.exit(1);
  }
};

