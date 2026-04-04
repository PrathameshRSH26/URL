import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    return res.json({status:"Server is up and running..."})
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})