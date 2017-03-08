VegeBot is a bot that gives vegeterian recipes when  through an ingredient 
The prompt : /command on slack called sexyveg with a POST method (go to slack's Apps & Intregrations/Custom Integration/Slash Commands to set it up)

How to install

1. Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed. 
2. clone VegeBot  
3. $npm install in the vegebot directory
4. $ npm start
5. Deploying to Heroku
	```
	$ heroku create
	$ git push heroku master
	$ heroku open
	```	
6. Copy the url given, and paste it in the Slash Command with the GET method 

It works!! Happy Vegging.