const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Funcion de render' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});