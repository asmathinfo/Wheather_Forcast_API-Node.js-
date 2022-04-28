const express = require('express');
const request = require('request');


const app = express();

app.get('/',(req,res) =>{
    let city = req.query.city;
    var request = require('request');request(
		`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=f7caa60a1ee2883f1ec8f03e3b71bbc6`,
		function(error, response, body) {
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
			}
		}
	);
});


app.listen(5000,()=> console.log('Server Started Listening Port 5000'));






//f7caa60a1ee2883f1ec8f03e3b71bbc6


