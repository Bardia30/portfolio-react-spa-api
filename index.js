require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');

app = express();



app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());




app.get('/', (req, res)=> {
    res.send("Welcome to Bardia Dehbasti's Portfolio backend server");
})

const PORT = process.env.PORT || 5051;

//setting up the server connection
app.listen(PORT, ()=> {
    console.log(`server has started for Bardia Dehbasti's portfolio project on http://localhost:${PORT}`);
})