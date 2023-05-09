const notes = require('express').Router(); 
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fs = require('fs');

notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

notes.post('/', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;
  
    if (title && text) {
      const newNote = {
        title,
        text,
      };
  
      readAndAppend(newNote, './db/db.json');

      const response = {
        status: 'success',
        body: newNote
      }

      res.json(response);
    } else {
      res.error('Error in adding note');
    }
})

module.exports = notes;