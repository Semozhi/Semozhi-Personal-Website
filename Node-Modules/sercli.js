const express = require('express');

const app=express();

app.get('/',function(req,res){
    const id= req.query.id
   res.send('hello vijaya'+ id);
})

app.get('/alien',function(req,res){
    res.send('welcome back alien');
})
app.get('/alien/:id',function(req,res){
    const id= req.params.id
    res.send('hi balaji'+id);
})
app.listen(9000,function(req,res){
    console.log('running')
});




