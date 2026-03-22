const session=require('express-session');
const express=require('express');
const app=express();
app.use(session({secret:"key"}));
app.get('/',(req,res)=>{req.session.count=(req.session.count||0)+1;res.send(req.session.count.toString());});
app.listen(3000);