const express=require('express');
const app=express();
app.use(express.json());
let data=[];
app.post('/add',(req,res)=>{data.push(req.body);res.send("Added");});
app.get('/all',(req,res)=>res.json(data));
app.listen(3000);