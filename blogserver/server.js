const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const dbConfig = require('./config/database.config.js');
// Middleware
app.use(bodyParser.json());
app.use(cors());
// MongoDB connection
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/public/auth', authRoutes);

const categoryRoutes = require('./routes/categoryRoutes.js');
app.use('/api/secured/categories', categoryRoutes);

const blogRoutes = require('./routes/blogRoutes.js');
app.use('/api/secured/blogs', blogRoutes);

const commentRoutes = require('./routes/commentRoutes.js');
app.use('/api/secured/comments', commentRoutes);
// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
