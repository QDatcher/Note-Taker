const express = require('express')
const path = require('path')
const { clog } = require('./middleware/clog');
const api = require('./routes/index')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(clog)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/')


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);