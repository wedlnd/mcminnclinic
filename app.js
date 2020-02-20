const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.render('mcminntest.ejs')
});

app.get('/about', function(req,res){
    res.render('about');
});

app.listen(3000, function(req,res){
    console.log('Server has started');
});
