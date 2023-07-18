import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Provide Full Name"],
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
  course: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact =
  mongoose.models.contacts || mongoose.model("contacts", contactSchema);

export default Contact;
