'use strict'

const fs = require('fs');
const express = require('express');
const path = require('path');
const cors = require('cors');
const sessions = fs.readFileSync(path.join(__dirname,'sessions.json'),'utf-8');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('<h1>Hello Salesofrce Devs from Express</h1>');
})

app.get('/api/sessions',cors(),(req,res)=>{
    res.json(JSON.parse(sessions));
})

app.listen(port,()=>{
    console.log(`Express server running on http://localhost:${port}`);
})
