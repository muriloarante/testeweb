
const express = require('express');
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



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
