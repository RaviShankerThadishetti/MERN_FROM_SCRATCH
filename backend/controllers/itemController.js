const Item = require('../models/Item');

// @desc    Get all items
// @route   GET /api/items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new item
// @route   POST /api/items
exports.createItem = async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  try {
    const item = await newItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update an item
// @route   PUT /api/items/:id
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Delete an item
// @route   DELETE /api/items/:id
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
