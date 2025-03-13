import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  size: {
    type: Array,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  restaurantId: {
    required: true,
    type: String,
  },
});

export const Menu = mongoose.model("Menu", menuSchema);
