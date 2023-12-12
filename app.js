

const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.json(employees)
})
app.get('/user', (req,res)=>{
    res.send('user page')
})
app.listen(3000, ()=>{
    console.log("server calisdi");
})