import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: {
    required: true,
    type: Array,
  },
  userId: {
    required: true,
    type: String,
  },
});

export const Cart = mongoose.model("Cart", cartSchema);
