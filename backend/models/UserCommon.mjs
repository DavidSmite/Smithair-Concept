import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
}, {
  timestamps: true,
  collection: "users", // 🔥 On force la bonne collection ici
});

export default mongoose.model("User", userSchema);
