import express from "express";
import mongoose from "mongoose";
import { ContactModel } from "../models/Contact.js";

const router = express.Router();

// Obtener todos los contactos
router.get("/", async (req, res) => {
  try {
    const contacts = await ContactModel.find({});
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Crear un nuevo contacto
router.post("/", async (req, res) => {
  const contact = new ContactModel({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  try {
    const result = await contact.save();
    res.status(201).json({ message: "Contact created", data: result });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Obtener un contacto por ID
router.get("/:contactId", async (req, res) => {
  try {
    const contact = await ContactModel.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Actualizar un contacto por ID
router.put("/:contactId", async (req, res) => {
  try {
    const updatedContact = await ContactModel.findByIdAndUpdate(
      req.params.contactId, 
      req.body, 
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact updated", data: updatedContact });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Eliminar un contacto por ID
router.delete("/:contactId", async (req, res) => {
  try {
    await ContactModel.findByIdAndDelete(req.params.contactId);
    res.status(200).json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export { router as contactRouter };
