const Blog = require('../models/Blog');
const create = async (req, res) => {
    try {
      const { title, content, userId, categoryId } = req.body;
      
      const newBlog = new Blog({
        title,
        content,
        image:req.file.filename,
        user: userId,
        category: categoryId,
      });
      const savedBlog = await newBlog.save();
  
      res.status(201).json({status:201,  message: 'success',data:savedBlog  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      
        const posts = await Blog.find().populate(['user', 'category']);
      res.status(200).json({status:200,  message: 'success',data:posts  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const getItemById = async (req, res) => {
    try {
      
        const blog = await Blog.findById(req.params.id).populate('user category');
        if (!blog) return res.status(404).json({status:404, message: 'Post not found' });
      res.status(200).json({status:200,  message: 'success',data:blog  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const updateItemById = async (req, res) => {
    try {
      
        const { title, content, userId, categoryId } = req.body;

        const updatedBlog = await Blog.findByIdAndUpdate(
          req.params.id,
          { title, content, user: userId, category: categoryId },
          { new: true }
        ).populate('user category');
    
        if (!updatedBlog) return res.status(404).json({status:404, message: 'Post not found' });
    
      res.status(200).json({status:200,  message: 'success',data:updatedBlog  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const deleteItemById = async (req, res) => {
    try {
      
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id).populate('user category');
        if (!deletedBlog) return res.status(404).json({status:404, message: 'Post not found' });
      res.status(201).json({status:200,  message: 'delete success',data:[]  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const getBlogsByCategory = async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
  
      // Retrieve blogs for the specified categoryId
      const blogs = await Blog.find({ category: categoryId }).populate('user category');
  
      res.status(200).json({ status: 200, message: 'success', data: blogs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  };
  const getBlogsByUser = async (req, res) => {
    try {
      const userId = req.params.userId;
  
      // Retrieve blogs for the specified userId
      const blogs = await Blog.find({ user: userId }).populate('user category');
  
      res.status(200).json({ status: 200, message: 'success', data: blogs });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  };
  module.exports = {
    create,
    getAll,
    getItemById,
    updateItemById,
    deleteItemById,
    getBlogsByCategory,
    getBlogsByUser
  };