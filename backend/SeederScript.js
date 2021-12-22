require("dotenv").config();

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/User")
const userData = require("./data/users")

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("Error with product Data import",error.message);
    process.exit(1);
  }
};

importData();