const express=require('express');
const app=express();
const port=8080;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
/*app.use((req,res)=>{
    console.log("request received");
    //res.send("Hello World");
    let code="<h1>Hello World</h1>";
    res.send(code);
})*/
app.get("/",(req,res)=>{
    res.send("you contacted root path");
})
app.get("/hello",(req,res)=>{
    res.send("you contacted hello path,Hello");
})
/*app.get("*",(req,res)=>{
    res.send("this path does not exist");
})*/
app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    let{username,id}=req.params;
    res.send(`Welcome to the page of @ ${username} with id ${id}`);
    res.send("data sent");
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    let {q}= req.query;
    res.send(`no results found for : ${q}`);
})