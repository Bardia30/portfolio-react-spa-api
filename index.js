require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app = express();



app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());



//endpoint to send the all the projects
app.get('/', (req, res)=> {
    fs.readFile('./data/projects.json', 'utf8', (err, data)=> {
        if (err) {
            return res.send(err);
        }
        const projectsData = JSON.parse(data);
        res.status(200).json(projectsData);
    })
})




//endpoint to send all the skills 
app.get('/skills', (req, res)=> {
    fs.readFile('./data/skills.json', 'utf8', (err, data)=> {
        if (err) {
            return res.send(err);
        }
        const skillsData = JSON.parse(data);
        res.status(200).json(skillsData);
    })
})





const PORT = process.env.PORT || 5051;

//setting up the server connection
app.listen(PORT, ()=> {
    console.log(`server has started for Bardia Dehbasti's portfolio project on http://localhost:${PORT}`);
})