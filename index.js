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
    res.send("you contacted hello path");
})