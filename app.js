const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI);
const app = express();
require('./services/passport');
require('./routes/authRoutes')(app);

// app.use(indexRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT);