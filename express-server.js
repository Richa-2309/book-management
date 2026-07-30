const express=require('express');
const server =express();
// this is my controller functiom

function globalmidilware(req,res,next){
    console.log("this is global midilware");
    next()
}
server.use(globalmidilware);
server.use(express.static("public"))


//miderware as function
function firstmidilware(req,res,next){
    console.log("this is the first midilware")
    next()
}
function Secondmidilware(req,res,next){
    console.log("this is the second midilware")
    next()
}
server.get("/",(req,res)=>{
    res.send("this is root server and it is working");
})

server.get("/send",firstmidilware, Secondmidilware,(req,res)=>{
    res.send("send route server is working fine as expected");
})

server.listen(8080,()=>{
    console.log("server is listening");
})