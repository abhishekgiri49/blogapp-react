const multer = require('multer');
const path = require('path');
const Blog = require('../models/Blog');
//image upload portion it works perfect once api path is well structured with user toker verify
// let imgStore = multer.diskStorage({
//   destination:function(req,file,cb){
//     cb(null,'./public/img')},
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
//   })
// let upload = multer({storage:imgStore}).single('image');
const create = async (req, res) => {
    try {
      //upload(req, res, async function(err) {
      const { title, content } = req.body;
      const imagePath = req.file.path;
      console.log(title,content,imagePath)
      // const newBlog = new Blog({
      //   title,
      //   content,
      //   user: userId,
      //   category: categoryId,
      // });
      // const savedBlog = await newBlog.save();
  
      // res.status(201).json({status:201,  message: 'success',data:savedBlog  });
      //})
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };

  const getAll = async (req, res) => {
    try {
      
        const posts = await Blog.find().populate('user category');
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
  module.exports = {
    create,
    getAll,
    getItemById,
    updateItemById,
    deleteItemById,
    getBlogsByCategory,
  };