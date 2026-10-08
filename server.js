const express =require('express');
const cors=require('cors');
const app=express();
app.use(cors());

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

let arr=[1,2,3,4,5];

app.get("/",function(req,res){
    res.send(arr);
})
