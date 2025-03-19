//base.js

const express = require('express')
const app = express()
const router = express.Router()


// Define a route
router.get("/", (req, res) => {
    res.render("main/home");
});
router.get("/about", (req, res) => {
    res.render('main/about')
})
router.get("/contact", (req, res) => {
    res.render('main/contact')
})
router.get("/projects", (req, res) => {
    res.render('main/projects')
})


module.exports = router

