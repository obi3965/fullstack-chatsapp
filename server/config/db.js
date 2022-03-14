const mongoose = require('mongoose')
const colors = require('colors')


require("dotenv").config({ path: ".env" });

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
     
    })
    console.log(`MongoDB Database connected with HOST`)
  } catch (error) {
      console.log(error);
  }
}

module.exports = connectDb