const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//---connection
mongoose.connect('mongodb://127.0.0.1:27017/garage')
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error(err));

app.use('/users', require('./routes/UserRouter'));
app.listen(PORT, () => console.log(`Serveur démarré sur le port
${PORT}`));