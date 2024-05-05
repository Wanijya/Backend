const express = require("express"); //this is bacially you require express package, jo bhi chije express me hai wo nikal ke const express me aa gai hai.
const app = express(); // express ki poori power app me aa gai hai.

app.use(function (req, res, next) {
  console.log("Middelware chala!");
  next(); //next kaa use hai ki jb aapka kaam ho gya hai to req ko aage forword kro.
}); // es server par jitani bhi req aayegi sab se phele ye line chalegi.

app.get("/", function (req, res) {
  //requestHandler hamesh ek function hota hai.
  res.send("Hello bhaii!");
});

app.get("/profile", function (req, res, next) {
    return next(new Error("Something went wrong"));
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!"); // ye wala jo part hai ye jata hai frontend par.
});

app.listen(3000);
