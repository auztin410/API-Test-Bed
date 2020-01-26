var request = require('request');
var fs = require('fs');

var translationRequest = 'This is a test translation!';

function translationAPI() {
	request(
		`https://api.funtranslations.com/translate/yoda.json?text=${translationRequest}`,
		{ json: true },
		(err, res, body) => {
			if (err) {
				return console.log(err);
			}
			console.log(res.body);
		}
	);
}

// function textConvert (){
//     var text = "From my ashes I am... Reborn!";
//     translationRequest = text.replaceAll(" ", "%20");
//     console.log(translationRequest);
// }

// textConvert();
//translationAPI();

function randomAPI() {
	const axios = require('axios');

	axios
		.post(`https://api.random.org/json-rpc/2/invoke`, {
			jsonrpc: '2.0',
			method: 'generateIntegers',
			params: {
				apiKey: '5620e5c6-c925-469b-93df-6d647d5dcde7',
				n: 1,
				min: 1,
				max: 20,
				replacement: true
			},
			id: 42
		})
		.then((res) => {
			console.log(`statusCode: ${res.statusCode}`);
			console.log(res.data.result.random.data);
		})
		.catch((error) => {
			console.error(error);
		});
}

randomAPI();
