const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../helper/multerConfig');
const { verifyToken } = require('../middlewares/auth');
const Blog = require('../models/Blog');
const { validateBlog, validate } = require('../middlewares/validator');
 // Adjust the path as needed

const path = require('path');
const {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
  getBlogsByCategory,
  getBlogsByUser
} = require("../controllers/blogController");

// Create a new item (requires token validation)
 router.post('/', verifyToken, upload.single('image'), validateBlog, validate, create);
 //normal route image is stored and work with this route

// Get all items (requires token validation)
router.get('/', getAll);

// Get a specific item by ID  (requires token validation)
router.get('/:id', getItemById);

// Update a item by ID (requires token validation)
router.put('/:id', verifyToken, validateBlog, validate, updateItemById);

// Delete a item by ID (requires token validation)
router.delete('/:id', verifyToken, deleteItemById);

// Get blogs for a specific category
router.get('/category/:categoryId', getBlogsByCategory);

router.get('/user/:userId/posts',verifyToken, getBlogsByUser);

module.exports = router;
