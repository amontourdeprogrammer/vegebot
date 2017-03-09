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
	let text = req.body.text;
	// implement your bot here ...

	// Error Handling
	if(! /^\d+$/.test(text)) { // not a digit
    res.send('U R DOIN IT WRONG. Enter a status code like 200!');
    return;
    }
    //302 case handling
    let data = {
        response_type: 'in_channel', // public to the channel
        text: '302: Found',
         attachments:[
            {
            image_url: 'https://http.cat/302.jpg'
            }
	    ]};

    res.json(data);
    

});

