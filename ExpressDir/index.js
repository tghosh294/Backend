const express= require("express");
const app= express();


let port=8080;

app.listen(port,()=>{
    console.log(`app listening on port ${port}` );
});

// app.use((req,res)=>{
//     console.log("request received");
//     let code="<h1>This is Express</h1><ul>Fruits</ul><li>Apple</li><li>Orange</li>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("hello, I am root");
});

app.get("/:username/:id",(req,res)=>{
   let {username, id}=req.params;
    res.send(`welcome to the page of @${username}`);
});

app.get("/search",(req,res)=>{
   let {q}=req.query;
   if(!q){
    res.send("<h1>nothing searched</h1>");
   }
    res.send(`<h1>search results for ${q}</h1>`);
});