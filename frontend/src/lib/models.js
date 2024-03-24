import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      maxlength: 60,
    },
    user_pass: {
      type: String,
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
