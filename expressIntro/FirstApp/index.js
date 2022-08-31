const express = require("express");
const app = express();

// app.use((req, res)=>{
//     console.log("We got a new request")
//    res.send("<h1>This is my webpage!</h1>")
// })
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params
    res.send(`<h1>Browsing from ${subreddit} subreddit</h1>`)
})
app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId} = req.params
    res.send(`<h1>Viewing postId: ${postId} on ${subreddit} subreddit</h1>`)
})
app.get('/',(req, res)=>{
    res.send("Welcome to the homepage!!!")
})
app.get('/cats',(req, res)=>{
    res.send("MEOW!")
});
app.post('/cats',(req, res)=>{
    res.send("POST REQUEST FROM /cats. THIS IS DIFFERENT FROM A GET REQUEST!!")
})
app.get('/dogs',(req, res)=>{
    res.send("WOOF!")
})
app.get('/search',(req, res)=>{
    const {q} = req.query;
    if(!q){
        res.send("NOTHING FOUND IF NOTHING IS SEARCH")
    }
    res.send(`<h1> Search result for :${q}</h1>`)
})
app.get('*',(req, res)=>{
    res.send("I dont know that path!")
})

app.listen(8080,()=>{
    console.log("LISTENING ON PORT 8080!")
})
