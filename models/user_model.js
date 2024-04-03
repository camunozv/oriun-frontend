import mongoose from "mongoose";

// Mongoose dependency allows modeling data before to putting it into the documents of our mongo database.
// Defines mongoDB document structure.
const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "Must provide a username"],
      unique: [true, "Must unique username"],
    },
    email: {
      type: String,
      required: [true, "Must provide a email"],
      unique: [true, "Must unique email"],
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;