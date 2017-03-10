VegeBot is a bot that gives vegeterian recipes when  through an ingredient 
The prompt : /command on slack called sexyveg with a POST method (go to slack's Apps & Intregrations/Custom Integration/Slash Commands to set it up)

#General install :
1. get a URL linked to a server (we have added info on this bellow)
2. Install the package on the server linked to the URL.
3. Copy/paste the URL in the slack custom-intergration page
4. Run the index.js
5. The program will run until stopped

##Getting a URL linked to a server

###How to install locally
1. run npm install
2. run ./ngork http 3000 (create a URL with my local host to put in slack )
4. get the ngrok url from their interface

###How to install on an external server :
1. Get a server (e.g. Digital Ocean) you can run with bash commands. Install linux and then node.
2. Get a dommain name (example.com) or a subdomain (subdomain.example.com)
3. the url is example.com:3000 or subdomain.example.com:3000


###how to install on heroku
??? ??? WORKING ON THIS
1. get a heroku account
2. Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed. 
5. Deploying to Heroku
	```
	$ heroku create
	$ git push heroku master
	$ heroku open
	```	
6. Copy the url given, and paste it in the Slash Command with the GET method 

##Inspiration : 
tutorial  : http://www.girliemac.com/blog/2016/10/24/slack-command-bot-nodejs/


It works!! Happy Vegging.
