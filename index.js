const express  = require("express");

const app= express();

app.get('/' , (req,res)=> {res.send("Hello"); });

app.get('/ping' , (req, res)=> {res.send("pong");});

const port = 3000;

app.listen(port);
