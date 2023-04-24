const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1:27017/finMag', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error ${err}`);
    process.exit();
  }
};

module.exports = connectDB;
