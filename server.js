const express = require('express');
const request = require('request');


const app = express();

app.get('/',(req,res) =>{
    const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
});


app.listen(5000,()=> console.log('Server Started Listening Port 5000'));






f7caa60a1ee2883f1ec8f03e3b71bbc6


