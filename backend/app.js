const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const users = require('./routes/users');
const getPort = require('get-port');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database configuration
const db = require('./config/db').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
// Route handler for "/contact"
app.get('/contact', (req, res) => {
    res.send('This is the contact page');
  });

// Routes
app.use('/api/users', users);

// Find an available port
getPort().then(port => {
  // Use the port for your server
  app.listen(port, () => console.log(`Server running on port ${port}`));
});





