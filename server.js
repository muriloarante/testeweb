
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define a porta


app.use(express.static('public'));
app.use(express.json());


app.get('/testando', (req, res) => {
  res.send('Servidor Express rodando com sucesso!');
});

app.post('/testando2', (req, res) => {
  let text = req.body.texto;
  text = text.toUpperCase();

  res.json({
    mensagem: text
  })
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
