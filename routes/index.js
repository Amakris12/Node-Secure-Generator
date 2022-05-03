const express = require('express');
const navigation = express.Router();
const path = require('path');

navigation.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})
navigation.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/contact.html'))
})
module.exports = navigation;