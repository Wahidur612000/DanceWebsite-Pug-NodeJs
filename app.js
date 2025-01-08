const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port =8000;

//EXPRESS SPECIFIC
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG SPECIFIC
app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'));

//ENEPOINTS
app.get('/',(req,res)=>{
    res.status(200).render('home.pug')
})

app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`Server running at ${port}/`);
})