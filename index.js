
import express from 'express'

const app = express();



app.get('/' , (req , res)=>{
    console.log("Yes i am runnning");
    res.send.json({name:"Anand Maurya"})
})

app.get('/about' , (req ,res)=>{
    console.log("res is running")
    res.send.json({name:"Anand"});
})

app.listen(3000 , ()=>{
    console.log("running at  port no. 3000")
})

/**
 * git init: initiate git :: but all are untracked till now
 * git status : shows all status ::
 * git add <file_name> : add for track ::
 */