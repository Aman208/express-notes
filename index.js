const express = require('express');
const app = express()
const port = process.env.PORT || 3500;
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {

console.log(req.body);
res.json({ username: 'Flavttio' });

});

app.listen(port , () => {console.log(`Server Start at ${port}`)});







/* {Build in Middleware }You can send JSON to the client by using Response.json()
It accepts an object or array, and converts it to JSON before sending it:
res.json({ username: 'Flavio' })  */














//app.listen() actually starts the server, and tells it to listen on port 8000
// We pass in a callback that is called when the server is ready to accept new requests.

// Multiple query parameters can be added using '&'
// ?name=flavio&age=35   
// localhost:8000/?name=flavio&age=35


//console.log(req.query.name);
//console.log(req.headers);
//console.log(req.header('User-Agent'));

// var key;
//Iteration through res.query :
// for (key in req.query) {
//     console.log(key , " :" , req.query[key]);
//     }


// res.status(404).send('File not found')
// res.status(404).end()  send Empty response

//res.sendStatus(200)
// === res.status(200).send('OK')
//res.sendStatus(403)
// === res.status(403).send('Forbidden')

//res.sendStatus(404)
// === res.status(404).send('Not Found')
//res.sendStatus(500)
// === res.status(500).send('Internal Server Error')
