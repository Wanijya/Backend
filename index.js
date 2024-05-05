const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public'))); //express se kahe rhe hai ki static files es wale path par search krna public wale path par, our wo chala gya app.use() ke andar.

app.set('view engine', 'ejs'); //aapka jo backend hai wo kya render krega, wo ejs pages show krega.

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/profile/:username", function(req, res){
    res.send(`Welcome, ${req.params.username}`);
})

app.get("/author/:username/:age", function(req, res){
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`);
})

app.listen(3000, function(){
    console.log("Its Running!!")
})