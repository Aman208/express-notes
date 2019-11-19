//You can access all the HTTP headers using the 
//Request.headers property

//You can change any HTTP header value using
//Response.set('Content-Type', 'text/html')

/* 
There is a shortcut for the Content-Type header however:
res.type('.html')  => 'text/html'
res.type('html')=> 'text/html'

res.type('json')  => 'application/json'
res.type('application/json') => 'application/json'

res.type('png') => image/png:

*/