import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  address: {
    street: {
      required: true,
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
  },
  image: {
    required: true,
    type: String,
  },
  rating: {
    required: true,
    type: Number,
  },
  ownerId: {
    type: String,
    required: true,
  },
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
