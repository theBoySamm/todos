//jshint esversion6


const express = require('express');
const ejs = require('ejs')
const app = express();
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('home', {title: "Homepage"})
})
app.post("/", (req, res) =>{
    console.log(req.body.email);
    res.redirect("/blog")
})

app.get('/blog', function(req, res){
    res.render('blog', {title: "Blog"})
})
app.post("/blog", (req, res) =>{
    let posts = req.body.posts
    let heading = req.body.heading
    console.log(req.body.posts) 
    res.render("posts", {title: "posts", postBody: posts, postTitle: heading})
})
app.get("/posts", (req, res) =>{
    res.render("posts")
})


const PORT = 5000
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})