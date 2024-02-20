import mongoose from "mongoose";

const laptopSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  screen_size: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  storage: {
    type: String,
    required: true,
  },
  battery_life: {
    type: String,
  },
  gpu: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  release_date: {
    type: String,
  },
});

const Laptop = mongoose.model("Laptop", laptopSchema);

export default Laptop;
