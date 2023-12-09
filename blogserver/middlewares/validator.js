const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const validateRegistration = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().custom(async value => {
    const existingUser = await User.findByEmail(value);
    if (existingUser) {
      // Will use the below as the error message
      throw new Error('A user already exists with this e-mail address');
    }
  }),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  // Add more validation rules as needed
];

const validateLogin = [
  body('email').isEmail().isLength({ min: 3 }).withMessage('email must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

const validateCategory = [
  body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
  body('description').isLength({ min: 6 }).withMessage('Description must be at least 6 characters long'),
];

const validateBlog = [
  body('title').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
  body('content').isLength({ min: 6 }).withMessage('Content must be at least 6 characters long'),
  body('userId').isMongoId().withMessage('Invalid user ID.Please select User'),
  body('categoryId').isMongoId().withMessage('Invalid category ID. Please select category'),
];
const validateComment = [
  body('comment').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
  body('userId').isMongoId().withMessage('Invalid user ID'),
  body('blogId').isMongoId().withMessage('Invalid blog ID'),
];
const validateUpdateComment = [
  body('comment').isLength({ min: 3 }).withMessage('Title must be at least 3 characters long'),
];
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({status:422,message:"error", data: errors.array() });
  }
  next();
};

module.exports = { validateRegistration, validateLogin,validateCategory,validateBlog,validateComment,validateUpdateComment, validate };
