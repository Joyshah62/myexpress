const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname+"/public"))

app.use(function(req,res,next){
    console.log("Middleware called URL is "+req.url);
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello, World!");
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/home.html')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about.html')
})

app.get('/contact/:id/',(req,res)=>{
    var id=req.params.id;
    res.send("Contact"+id);
    
})

app.get('/search/',(req,res)=>{
    var id=req.query.q;
    res.send("Search is "+id)
})

app.get('/contact/',(req,res)=>{
    res.sendFile(__dirname+'/form.html')
})

app.get('/process/',(req,res)=>{
    var a = parseInt(req.query.txt1);
    var b = parseInt(req.query.txt2);
    var c = parseInt(req.query.txt3);
    var d = parseInt(req.query.txt4);
    var avg=(a+b+c+d)/4;
    if(avg<50){
        res.send(`sub1 = ${a}`+ "<br/>"  + `sub2 = ${b}`+ "<br/>"  + `sub3 = ${c}`+ "<br/>" + `sub4 = ${d}`+ "<br/>" +  `Average = ${avg}`+ "<br/>"  + `You are failed`)
    }
    else{
        res.send(`sub1 = ${a}` + `sub2 = ${b}`  + `sub3 = ${c}` + `sub4 = ${d}`+ `Average = ${avg}`  + `You are Passed`)
    }
    
})

app.listen(port, ()=>{
    console.log("localhost started at 3000")
})