const express = require('express')
const app3 = express()



app3.get('/', (req, res) => res.download('./file.txt' , 'newfile.txt'
 , (err) => {
    if(err)
    {
         console.log ("Error :" , err);
    } 
    else
    {
        console.log("Succcess Fully Send");
    }
 }
) );

app3.listen(3005, () => console.log('Server ready'))