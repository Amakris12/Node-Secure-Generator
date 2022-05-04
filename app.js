const express = require('express');
const app = express();


//middleware
app.use(express.json())
app.use(express.static('./public'))
require('dotenv').config()


const port = 3000;

// Navigation
app.use('/',require('./routes/index.js'))


const start = ()=>{
    try{
        app.listen(port,console.log(`listening on port ${port}`))
    }catch(error){
        console.log(error);
    }
}
start();