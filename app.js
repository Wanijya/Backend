const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();


app.use(cookieParser());

app.get('/', (req, res) => {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("pololololoo", salt, function(err, hash) {
    //         console.log(hash);
    //     });
    // });
    bcrypt.compare("pololololoo", "$2b$10$iP7qiQXbROizAwpswiGP7e.8CxAWtMzdYxIKMeUOjNGcMfPYKsenO", function(err, result) {
        console.log(result)
    });
})

app.listen(3000)