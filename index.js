'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT, () => {  
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);});

// Now, create HTTP POST route method to handle the command:

app.post('/', (req, res) => {
	let ingredient = req.body.text;
	// implement your bot here ...

	// Error Handling
	if(! /^[a-z]+$/.test(ingredient)) { // not a digit
    res.send('Ooopss! I believe that is not an ingredient');
    return;
    }
    let recipe = 'https://www.bbcgoodfood.com/search/recipes?query=Vegan+' + ingredient;
    let data = {
        response_type: 'in_channel', // public to the channel
        text: 'This is a recipe with ' + ingredient,
        //!!! Slack message attachment styling
        attachments:[
            {
            title: "Click here to see your recipe",
            title_link: recipe
            }
	    ]};
    console.log(recipe);
    res.json(data);
});

