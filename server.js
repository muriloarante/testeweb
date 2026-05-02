
const express = require('express');
const db = require('./db.js');

const app = express();
const port = process.env.PORT || 3000; // Define a porta


app.use(express.static('public'));
app.use(express.json());


app.post('/testresult', (req, res) => {
  const msg = req.body.testMsg;

  res.json({
    resMsg: msg
  })
});



app.post('/register', (req, res) => {
  const { name, email } = req.body;

  try {
    const result = db.prepare(`
      INSERT INTO users
      (name, email)
      VALUES (?, ?)
      `).run(name, email);

    res.json({id: result.lastInsertRowid});

    
  } catch (err) {
    res.status(400).json({error: err.message})
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


app.get('/users', (req, res) => {
  try {
    const rows = db.prepare(`
      SELECT * FROM users;
      `).all();


    res.json(rows)


  } catch (e) {
    res.status(500).json({error: e.message});
  }
});


