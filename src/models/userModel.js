import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userModel = new Schema(
  {
    name: { type: String, require: true, maxLength: 50 },
    email: { type: String, require: true, maxLength: 50 },
    password: { type: String, require: true, minLength: 6 },
  },
  { versionKey: false }
);

const User = mongoose.model("User", userModel);
export default User;
