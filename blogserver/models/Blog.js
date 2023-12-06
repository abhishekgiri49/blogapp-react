const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image:{type:String,required:true},
  // user: { type: String, required: true },
  // category: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  
  // other post fields...
});

const Blog = mongoose.model('Blog', postSchema);

module.exports = Blog;
