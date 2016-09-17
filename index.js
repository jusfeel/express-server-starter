// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App setup; register middleware
// morgan is logging platform
// bodyParser is used to parse json
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);						

// Server setup
const port = process.env.PORT || 3090;
// http is node library
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);

