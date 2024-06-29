// File: routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

// Get all vendors
router.get('/', vendorController.getAllVendors);

// Get a vendor by ID
router.get('/:id', vendorController.getVendorById);

// Create a new vendor
router.post('/', vendorController.createVendor);

// Update a vendor by ID
router.put('/:id', vendorController.updateVendor);

// Delete a vendor by ID
router.delete('/:id', vendorController.deleteVendor);

module.exports = router;
