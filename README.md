VegeBot is a bot that gives vegeterian recipes when  through an ingredient 
The prompt : /command on slack called sexyveg with a POST method (go to slack's Apps & Intregrations/Custom Integration/Slash Commands to set it up)

Right Now, I am testing a tutorial http://www.girliemac.com/blog/2016/10/24/slack-command-bot-nodejs/
I use Ngork to create a URL with my local host to put in slack
If /sexyveg + http code --> image

How to install locally
1. run npm install
2. run ./ngork http 3000
3. Copy/paste the ngork url in the slack intergration page
4. run node index.js



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
