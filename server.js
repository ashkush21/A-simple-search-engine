var express = require('express');
var app = express(); 
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser'); 
var path = require('path'); 
var Movie = require('./models/movies');
var port = process.env.PORT || 5000; 


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public')); 


// mongoose.connect("mongodb://localhost:27017/flickZee", { useNewUrlParser: true }, function(err) {
//     if (err) {
//         console.log('Not connected to the database: ' + err);
//     } else {
//         console.log('Successfully connected to MongoDB');
//     }
// });


mongoose.connect("mongodb://ash:flick1zee@ds263656.mlab.com:63656/flickzee", { useNewUrlParser: true });




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html')); 
});


//This route sends data to the frontend angular route
app.get('/movies', function(req, res){
	Movie.find({}, function(err, allmovies){
		res.json(allmovies);
	});
});


app.listen(port, function() {
    console.log('Running the server on port ' + port); 
});
