import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please Provide Full Name!"],
  },
  email: {
    type: String,
    required: [true, "Please Provide Email!"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Please Provide Phone Number!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide Password!"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  voucher: String,
  voucherExpiry: Date,
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
