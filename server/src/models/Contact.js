import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El correo electrónico es obligatorio"],
  },
  phone: {
    type: String,
    required: [true, "El número de teléfono es obligatorio"],
  },
  // Añade aquí cualquier otro campo que consideres necesario.
}, { timestamps: true }); // Los timestamps son opcionales, pero suelen ser útiles.

export const ContactModel = mongoose.model("Contact", contactSchema);
