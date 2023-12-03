const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  // other post fields...
},{
    timestamps: true
});

const Comment = mongoose.model('Comment', postSchema);

module.exports = Comment;
