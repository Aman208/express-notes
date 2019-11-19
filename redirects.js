//res.redirect('/go-there');   forward to new page

// res.redirect('back') or res.redirect('..')  back


   // res.redirect('../go-there')

   //res.redirect('www.ygugugff.khkhg');  another website 


   //Serving static files

   //How to serve static assets directly from a folder in Express
   //It's common to have images, CSS and more in a  'public'
   // subfolder, and expose them to the root level:





const express = require('express')
const app2 = express()


app2.use( '/root' , express.static('public'));

app2.listen(3003, () => console.log('Server ready'));