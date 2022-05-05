const express = require('express');
const navigation = express.Router();
// const {ensureAuthenticated} = require('../middleware/auth')
const path = require('path');

navigation.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})
navigation.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/contact.html'))
})
navigation.get('/about',(req, res)=>{
  res.sendFile(path.join(__dirname,'../public/about.html'))
})
navigation.get('/login', (req, res)=>{
  res.sendFile(path.join(__dirname,'../public/login.html'))
})

navigation.get('/passwordGenerator',(req, res)=>{
  res.sendFile(path.join(__dirname,'../public/passwordGenerator.html'))
})

navigation.get('/passwordHolder',(req, res)=>{
  res.sendFile(path.join(__dirname,'../public/passwordHolder.html'))
})

// Admin
navigation.get('/adminHome',(req, res)=>{
  res.sendFile(path.join(__dirname,'../public/adminHome.html'))
})
module.exports = navigation;