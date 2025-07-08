import express from 'express';
import cors from 'cors';
import saludoRouter from './routes/saludoRouter';
import crearTabla from './initDb';

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());

crearTabla();

app.get('/saludo', (req, res) => {
  res.json({ mensaje: 'Funcion de render' });
});

app.use('/saludos', saludoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

