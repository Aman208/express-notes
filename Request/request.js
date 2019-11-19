

const express = require('express');    
const axios = require('axios');
const app6 = express();

axios.get('http://localhost:3500/').then((res)=>{
console.log(res.data);
}).catch((err)=>{
  console.log(err);
})
 

app6.listen(5001);