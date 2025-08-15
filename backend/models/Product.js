const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "Price must be a positive number"],
    },
    category: {
      type: String,
      default: "Indoor Plants",
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      min: [0, "Stock cannot be negative"],
    },
    careTips: {
      type: [String], // stored as an array, can split comma-separated strings in backend
      default: [],
    },
    imageUrl: {
      type: String,
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Product", productSchema);
