const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('currentYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('toUpper', (text) => {
    return text.toUpperCase();
})

app.use((req,res,next) =>{
    res.render('maintenance.hbs');
})

app.get("/", (req, res) =>{
    console.log("URL: /");
    res.render('home.hbs', {
        pageTitle: "Home page", 
        welcomeMessage: "Welcome to home page"
        }
    );
})

app.get("/about", (req, res) =>{
    res.render('about.hbs', {
        pageTitle: "About page", 
        welcomeMessage: "Welcome to about page"
        }
    );
})

app.get("/help", (req, res) =>{
    res.render('help.hbs', {
        pageTitle: "Help page", 
        welcomeMessage: "Welcome to help page"
        }
    );
})

app.listen(process.env.PORT);