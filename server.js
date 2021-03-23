// Import statements
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

// ROUTES
app.get('/', function(req, res) {
    // res.send('Testing');
    res.send("{'Test': 1}");
})

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORSenabled for all origins!'})
    });



// LOGGING
var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})