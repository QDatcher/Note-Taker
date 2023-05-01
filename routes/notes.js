const notes = require('express').Router();
const fs = require('fs');

notes.get('/', (req, res) => {
    fs.readFile('../db/db.json')
})