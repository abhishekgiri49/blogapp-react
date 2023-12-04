const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
});
userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
  };
const User = mongoose.model('User', userSchema);

module.exports = User;
