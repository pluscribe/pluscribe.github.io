const express = require('express');
const app = express();
const ejs = require('ejs');

//Middlewares
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.get("/", (req, res, next) => {
    try {
        res.render("index")
    } catch (err) {
        return next(err)
    }
})





module.exports = app