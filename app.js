const express = require('express') 
const port=3000
const app=express()

app.get('/markprocess',(req,res) => {
    var c= req.query.c
    var c2= req.query.c2
    var sql= req.query.sql
    var php= req.query.php
    var nodejs= req.query.nodejs

    var total = parseInt(c)+parseInt(c2)+parseInt(sql)+parseInt(php)+parseInt(nodejs)

    if(total>80){
        res.send('first division')
    }

    else if(total>){
        res.send('first division')
    }

    if(total>80){
        res.send('first division')
    }

    if(total>80){
        res.send('first division')
    }
})