const Vendor = require('../models/Vendor'); // Corrected path

// Utility function for error handling
const handleError = (res, error, message = 'Internal Server Error') => {
  console.error(message, error);
  res.status(500).json({ error: message });
};

// Get all vendors
exports.getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find().sort({ createdAt: -1 });
    res.json(vendors);
  } catch (err) {
    handleError(res, err, 'Error fetching vendors');
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
    handleError(res, err, 'Error fetching vendor');
  }
};

// Create a new vendor
exports.createVendor = async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json(newVendor);
  } catch (err) {
    handleError(res, err, 'Error creating vendor');
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
    handleError(res, err, 'Error updating vendor');
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
    handleError(res, err, 'Error deleting vendor');
  }
};
