const express=require('express')
const app=express()
const cors=require('cors')
const port=process.env.PORT ||5000;



app.use(cors())
const categories=require('./data/categories.json')

const language=require('./data/language.json')

app.get('/',(req,res)=>{
    
    res.send('news api running')
})

app.get('/languages',(req,res)=>{
    res.send(categories)
})



app.get('/language/:id',(req,res)=>{
    const id=req.params.id;
    const selectedLanguage=language.find(n=>n.id===id)
    res.send(selectedLanguage)
    // console.log(req.params.id)
})


app.listen(port,()=>{
    console.log('server runing on port',port)
})
