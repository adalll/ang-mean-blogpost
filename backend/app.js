const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postRoutes = require('./routes/posts');

mongoose.connect('mongodb+srv://adalll:g9qcVt3Tr1ZXwwku@cluster0-ewjzv.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
  console.log('Connected to MongoDB OK');
  })
  .catch(() => {
    console.log('Connection failed ERROR');
  });


//express is a big chain of middlewares wich applies to our request

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.use("/api/posts", postRoutes);

module.exports = app;
