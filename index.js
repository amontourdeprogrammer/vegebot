var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cool', function(request, response) {
	response.send(cool());
});

// route: Route { path: '/sexyveg', stack: [ [Object] ], methods: { get: true } } }
// The get method :
///test/demo_form.php?name1=value1&name2=value2

// The post method
/// POST /test/demo_form.php HTTP/1.1
///Host: w3schools.com
///name1=value1&name2=value2

app.get('/sexyveg', function(request, response){
    	var id = request.query.id;
    //further operations to perform
		response.send("request " + id);
		console.log(id);
		});

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


