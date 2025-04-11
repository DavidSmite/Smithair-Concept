import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({
  path: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Visit = mongoose.models.Visit || mongoose.model("Visit", visitSchema);

export default Visit;
