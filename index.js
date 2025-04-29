import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRoutes from './routes/main.js';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware de logs
app.use((req, res, next) => {
  const now = new Date().toLocaleString();
  console.log(`[${now}] Ruta visitada: ${req.url}`);
  next();
});

// Configuraciones
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// Rutas
app.use('/', mainRoutes);

// Redirección /inicio
app.get('/inicio', (req, res) => res.redirect('/'));

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MuseArte corriendo en http://localhost:${PORT}`));