require('dotenv').config()

const path = require("path");
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/pages/main/index.html'));
});

app.get('/game',function(req,res) {
    res.sendFile(path.join(__dirname+'/pages/game/index.html'));
});

app.get('/result',function(req,res) {
    res.sendFile(path.join(__dirname+'/pages/result/index.html'));
});

app.get('/tutorial',function(req,res) {
    res.sendFile(path.join(__dirname+'/pages/tutorial/tutorial.html'));
});


app.listen(process.env.PORT, () => console.log(`Server listening on port: ${process.env.PORT}`));