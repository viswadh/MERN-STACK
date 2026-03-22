const fs=require('fs');
fs.writeFile('file.txt','Hello World',(err)=>{
if(err) console.log(err);
else console.log("File created");
});