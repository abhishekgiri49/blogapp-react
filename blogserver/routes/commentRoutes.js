const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');

const { validateComment,validateUpdateComment, validate } = require('../middlewares/validator');
const {
  create,
  getCommentsForBlog,
  getItemById,
  updateItemById,
  deleteItemById,
} = require('../controllers/commentController');

// Create a new item (requires token validation)
router.post('/', verifyToken, validateComment, validate, create);

router.get('/:blogId/comments', getCommentsForBlog);


// Get a specific item by ID  (requires token validation)
router.get('/:id', verifyToken, getItemById);

// Update a item by ID (requires token validation)
router.put('/:id', verifyToken, validateUpdateComment, validate, updateItemById);

// Delete a item by ID (requires token validation)
router.delete('/:id', verifyToken, deleteItemById);

module.exports = router;
