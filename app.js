const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./models/user')
require('./routes/authRoutes')(app);



const PORT = process.env.PORT || 3000;
app.listen(PORT);