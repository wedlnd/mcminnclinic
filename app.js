const express = require('express');
const PORT = process.env.PORT || 3000;
const helmet = require('helmet');
const app = express();

app.set('view engine', 'ejs');
app.use(helmet());
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('mcminntest.ejs');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/podcast', function(req, res) {
	res.render('podcast');
});

app.get('/newpatient', function(req, res) {
	res.render('newpatient');
});

app.get('/currentpatient', function(req, res) {
	res.render('currentpatient');
});

app.get('/contact', function(req, res) {
	res.render('contact');
});

app.get('/FAQ', function(req, res) {
	res.render('FAQ');
});

app.get('/affiliates', function(req, res) {
	res.render('affiliates');
});

app.listen(PORT, function() {
	console.log('Server has started');
});
