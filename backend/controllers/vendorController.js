// File: controllers/vendorController.js
const Vendor = require('../models/Vendor'); // Corrected path

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    res.json(vendors);
  } catch (err) {
    console.error('Error fetching vendors:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a vendor by ID
exports.getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (err) {
    console.error('Error fetching vendor:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    console.error('Error creating vendor:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a vendor by ID
exports.updateVendor = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(updatedVendor);
  } catch (err) {
    console.error('Error updating vendor:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a vendor by ID
exports.deleteVendor = async (req, res) => {
  try {
    const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!deletedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json({ message: 'Vendor deleted successfully' });
  } catch (err) {
    console.error('Error deleting vendor:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
