var express = require('express');
var app = express();

function view(view){
    return __dirname + '/' + view + '.html';
}

app.get('/', function(req, res){
    res.sendFile(view('index'));
});

app.use('/asset', express.static('asset'));
app.use('/node_modules', express.static('node_modules'));

app.listen(5000, function(){
    console.log("Berhasil listen di port 5000");
});