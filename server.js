var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/static', express.static("assets"));

app.get('/', function(req, res){
    res.render('content');
});

app.get('/auth/google', function(req, res){
    res.render('dynamic', {
        name:'My dynamic page!',
        url: "http://www.google.com"
    });
});

app.use(function(req, res, next){
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});