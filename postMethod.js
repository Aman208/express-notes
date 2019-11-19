//POST query parameters are sent by HTTP clients for example by forms, or when performing a
// POST request sending data.


/* If the data was sent as JSON, using  Content-Type: application/json

app.use(express.json())


If the data was sent as JSON, using Content-Type: application/x-www-form-urlencoded


app.use(express.urlencoded())

app.post('/form', (req, res) => {
const name = req.body.name
})

req.body is use to reterive data from POST request

*/