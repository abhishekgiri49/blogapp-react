const Comment = require('../models/Comment');


const create = async (req, res) => {
    try {
      const { comment, userId, blogId } = req.body;
      
      const newComment = new Comment({
        comment,
        user: userId,
        blog: blogId,
      });
      const saved = await newComment.save();
  
      res.status(201).json({status:201,  message: 'success',data:saved  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const getCommentsForBlog = async (req, res) => {
    try {
      const blogId = req.params.blogId;
  
      // Retrieve comments for the specified blogId
      const comments = await Comment.find({ blog: blogId }).populate('user');
  
      res.status(200).json({ status: 200, message: 'success', data: comments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
  };
  const getItemById = async (req, res) => {
    try {
      
        const comment = await Comment.findById(req.params.id).populate('user blog');
        if (!comment) return res.status(404).json({status:404, message: 'Comment not found' });
      res.status(200).json({status:200,  message: 'success',data:comment  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const updateItemById = async (req, res) => {
    try {
      
        const { comment, userId, blogId } = req.body;

        const updatedComment = await Comment.findByIdAndUpdate(
          req.params.id,
          { comment },
          { new: true }
        ).populate('user blog');
    
        if (!updatedComment) return res.status(404).json({status:404, message: 'Comment not found' });
    
      res.status(200).json({status:200,  message: 'success',data:updatedComment  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  const deleteItemById = async (req, res) => {
    try {
      
        const deletedComment = await Comment.findByIdAndDelete(req.params.id).populate('user blog');
        if (!deletedComment) return res.status(404).json({status:404, message: 'Comment not found' });
      res.status(201).json({status:200,  message: 'delete success',data:[]  });
    } catch (error) {
      console.error(error);
      res.status(500).json({status:500, message: 'Internal Server Error' });
    }
  };
  module.exports = {
    create,
    getCommentsForBlog,
    getItemById,
    updateItemById,
    deleteItemById,
  };