const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const Blog = require('../models/Blog');
const { validateBlog, validate } = require('../middlewares/validator');
const {
  create,
  getAll,
  getItemById,
  updateItemById,
  deleteItemById,
  getBlogsByCategory
} = require("../controllers/blogController");

// Create a new item (requires token validation)
 router.post('/', verifyToken, validateBlog, validate, create);
// router.post('/', async(req,res)=>{
//   try {
//     const { title, content, userId, categoryId } = req.body;
//     //console.log(title,content,userId,categoryId)
//     const newBlog = new Blog({
//       title,
//       content,
//       user: userId,
//       category: categoryId,
//     });
//     const savedBlog = await newBlog.save();

//     res.status(201).json({status:201,  message: 'success',data:savedBlog  });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({status:500, message: 'Internal Server Error' });
//   }
// });
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

module.exports = router;
