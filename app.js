var express = require('express');

var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
   res.render('home',{headTitle: 'I Love My City'});
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
   console.log("Server Running at port 3000"); 
});