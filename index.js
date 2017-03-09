'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(3000, () => {  
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);});

// Now, create HTTP POST route method to handle the command:

app.post('/', (req, res) => {
	let code = req.body.text;
	// implement your bot here ...

	// Error Handling
	if(! /^\d+$/.test(code)) { // not a digit
    res.send('U R DOIN IT WRONG. Enter a status code like 200!');
    return;
    }
    //302 case handling
    let image = 'https://http.cat/' + code;
    let data = {
        response_type: 'in_channel', // public to the channel
        text: 'This is ' + code,
         attachments:[
            {
            image_url: image,
            title: "Slack API Documentation",
            title_link: "https://api.slack.com/"
            }
	    ]};

	console.log(code)
    res.json(data);
    

});

