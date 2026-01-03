
import express from 'express'

const app = express();

app.get('/' , (req , res)=>{
    console.log("Yes i am runnning");
    res.send.json({name:"Anand Maurya"})
})

app.listen(3000 , ()=>{
    console.log("running at  port no. 3000")
})