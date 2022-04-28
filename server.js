const express = require('express');
const request = require('request');


const app = express();

app.get('/',(req,res) =>{
    res.send('Hello This is my First Mini Project');
});


app.listen(5000,()=> console.log('Server Started Listening Port 5000'));