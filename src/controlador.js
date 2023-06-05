const express = require('express');
const bodyParser = require('body-parser');
const db = require('./modelo');


const app = express();
const PORT = 4000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Obtener todos los productos
app.get('/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      console.error('Error al obtener los productos:', err);
      res.status(500).json({ error: 'Error al obtener los productos desde el controlador' });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});