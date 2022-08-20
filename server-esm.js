'use strict'


import http from 'http';
import fs from 'fs';

const port = process.env.PORT || 3001;

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Hello World</h1>');
    }
    else{
        if(req.url==='/api/sessions'){
            const sessions = fs.readdirSync(new URL("./sessions.json",import.meta.url),'utf-8');
            res.writeHead(200,{'Content-Type':'application/json'});
            res.write(sessions);
        }
        else{
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.write(`404: Not found - ${req.url}`);
        }
    }
    res.end();
});

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})