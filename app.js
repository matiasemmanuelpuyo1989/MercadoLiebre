const express=require('express');
const path = require("node:path");
const app= express();



app.get("/",(req, res)=>{
    res.sendFile(path.resolve("views/home.html"));
});

app.listen(3000, (err) => console.log("Server run: http://www.localhost:3000"))

app.use(express.static("./public"));

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'));
});
