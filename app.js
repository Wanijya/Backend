const cookieParser = require('cookie-parser');
const express = require('express');
const bycrypt = require('bcrypt');
const app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie("name", "Aaru");
    res.send("done");
})

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send("read page");
})

app.listen(3000)