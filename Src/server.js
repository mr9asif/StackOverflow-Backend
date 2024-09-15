const express = require('express');
const router = require('./Routers/Router');
const mongoDBConnect = require('./Config/connect');
require('dotenv').config();
const app = express();
const port =process.env.PORT || 3001;



app.use(router)

mongoDBConnect()

app.get('/', (req, res)=>{
    res.send('server is running')
})

app.listen(port,  ()=>{
    console.log(`server running on ${port}`)
   
})