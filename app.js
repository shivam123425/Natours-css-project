const express = require("express");
const app = express();


app.use(express.static(__dirname + '/css'));

app.get("/", (req,res)=> {
    res.sendFile(__dirname+"/index.html");
})


app.listen(8080, ()=> {
    console.log("Server Running");
})