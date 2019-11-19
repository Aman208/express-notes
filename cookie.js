/*

Cookies are simple, small files/data that are sent to {client} with a server request 
and stored on the client side. Every time the user loads the website back,
this cookie is sent with the request. This helps us keep track of the user’s actions.

The following are the numerous uses of the HTTP Cookies −
Session management
Personalization(Recommendation systems)
User tracking

 */
// Middleware :- software that acts as a bridge between an operating system
//or database and applications, especially on a network.


const express = require('express');
const app1 = express();

var cookieParser = require('cookie-parser');
app1.use(cookieParser());

// cookie-parser is a middleware which parses
//cookies attached to the client request object
//third party middleware



app1.get('/', function(req, res){
    
    console.log('Cookies: ', req.cookies)
    res.cookie('name' , 'Aman')
    .cookie('roll' , '81')
    .send('cookie set'); //Sets name = aman
    // console.log('sdfghuiop');
    // console.log(cookie('name'));
 });
 
 app1.listen(3005 );

 //res.clearCookie('name') 
 //To clear an cookie with key 'name'

// res.cookie('username', 'Flavio', { domain: '.flaviocopes.com', path: '/administrator', secure: true })

// res.cookie('username', 'Flavio', { expires: new Date(Date.now() + 900000), httpOnly: true} )

//httpOnly  -> set the cookie to be accessible only by the web server 