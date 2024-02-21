const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send("Server is running");
});

app.get('/form', function(req, res) {
    res.sendFile(__dirname + '/form.html');
});


app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submitform', function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    res.send("Data submitted: Name - " + name + ", Email - " + email + ", Number - " + number);
});

const PORT = 8000; 

const server = app.listen(PORT, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("Server listening at http://%s:%s", host, port);
});