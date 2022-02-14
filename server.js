const fetch = require('node-fetch');

const express = require('express');
const app = express();

const Datastore = require('nedb');
const db = new Datastore('datastore.db');
db.loadDatabase();

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.listen(4000, () => {
    console.log('Listening');
})

app.post('/cadastro', (req, resp) => {

    console.log('Got it');
    console.log(req.body);
    db.insert(req.body);
    resp.redirect('/index.html');

})

app.post('/login', (req, resp) => {
    const data = req.body;
    console.log(data);
    db.find(data, (err,docs)=>{
        const isEmpty = Object.keys(docs).length === 0;
        if(isEmpty){
            resp.send('Email ou senha invalidos');
        }
        else{
            resp.redirect('/jgpage.html');
        }
    })
})
app.get('/valorant',async (req,resp)=>{
    
    const response = await fetch('https://valorant-api.com/v1/agents');
    const data = await response.json();
    resp.send(data);
})
