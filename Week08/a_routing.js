const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send("Home"));
app.get('/student/:id',(req,res)=>res.send(req.params.id));
app.listen(3000);