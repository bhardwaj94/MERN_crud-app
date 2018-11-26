const express = require('express');
const proxy = require('http-proxy-middleware')
// create express app
const app = express();

//var apiProxy = proxy('/api/', { target: 'http://localhost:3006' });
// listen for requests

app.get('/api/',(req,res)=>{
    res.status(200).send({
        message:"hello MERN."
    });
})
app.listen(3006, () => {
    console.log("Server is listening on port 3006");
});