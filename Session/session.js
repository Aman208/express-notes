/* 

By default Express requests are sequential and no request can be linked to each other.
There is no way to know if this request comes from a client that already performed a request
previously.
Users cannot be identified unless using some kind of mechanism that makes it possible.
That's what sessions are.
When implemented, every user of you API or website will be assigned a unique session, and
this allows you to store the user state.


*/

const session = require('express-session'); //middleware

const express = require('express');
const app4 = express()

var secretcode = 's3cur4';
var sessionid = '1023';

app4.use( session( {secret : secretcode,
name: sessionid } ) );


app4.get('/', (req, res, next) => {
    req.session.name = 'Flavio'
    console.log(req.session.name);

    res.send("Hello World");
 }
);


app4.listen(3008 , () => console.log('server start ...') );



// 'secret' is the only required parameter, but there are many 
// more you can use. It should be a
// randomly unique string for you application.