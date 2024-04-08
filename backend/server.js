const express=require('express')

const students=require('./data/students')
console.log(students)
const app=express();

app.listen(3005,console.log("hello world"))

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/api/students',(req,res)=>{
    res.json(students);

});