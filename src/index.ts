import express from 'express';
import cors from 'cors';
import saludoRouter from './routes/saludoRouter';
import crearTabla from './initDb';

const app = express();
const port = process.env.PORT || 3000;

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

async function main() {
  try {
    //await crearTabla(); // Espera a que se cree la tabla antes de iniciar
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

main();
