var inquirer = require("inquirer");
var request = require('request');
var fs = require("fs");

var translationRequest = "This is a test translation!";

function translationAPI (){
    request(`https://api.funtranslations.com/translate/yoda.json?text=${translationRequest}`, { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(res.body);
});
}

// function textConvert (){
//     var text = "From my ashes I am... Reborn!";
//     translationRequest = text.replaceAll(" ", "%20");
//     console.log(translationRequest);
// }

// textConvert();
translationAPI();

var promptGo = true;

if(promptGo === true) {
    inquirer.prompt([
        {
            type: "list",
            message: "This is a test prompt",
            choices: ["A", "B", "C", "D"],
            name: "options"
        }
    ])
}