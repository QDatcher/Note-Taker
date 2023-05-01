const notes = require('express').Router();
const fs = require('fs');

notes.get('/', (req, res) => {
    fs.readFile('../db/db.json')
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text
      };
  
      readAndAppend(newNote, '../db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
})

module.exports = notes;