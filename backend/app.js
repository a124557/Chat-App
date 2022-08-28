const express = require('express');
const dotenv = require('dotenv');
const {table} = require("./data.js");
const db = require('./configuration/mongo.js');

//Calling dotenv
dotenv.config()
const app = express();
//Connecting to the MongoDB database
db();

app.get("/", (req,res) => {
    res.send('Get API is running correctly')
});

app.get("/api/chat", (req,res) => {
    res.send(chats);
})

app.get("/api/chat/:id", (req,res) => {
    //Here c refers to a key value in our data table
    const data = table.find((c) => c.name === req.params.id);
    res.send(data);
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
});