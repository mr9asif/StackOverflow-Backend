const express = require('express');
const router = require('./Routers/Router');
require('dotenv').config();
const app = express();
const port =process.env.PORT || 3001;



app.use(router)

app.get('/', (req, res)=>{
    res.send('server is running')
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`)
})