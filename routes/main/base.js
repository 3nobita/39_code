//base.js

const express = require('express')
const app = express()
const router = express.Router();
const herAuth = require('../../public/components/her')
   

// Define a route
router.get("/", (req, res) => {
    res.render("main/home");
});
router.get('/her',(req,res)=>{
    res.render('main/her')
})
router.get('/platform',(req,res)=>{
    res.render('main/platform')
})
 
 
module.exports = router

  