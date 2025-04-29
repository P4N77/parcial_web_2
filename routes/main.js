import { Router } from 'express';
const router = Router();

const obras = [
  {
    id: '1',
    titulo: 'Sinfonía del Caos',
    autor: 'L. Dávila',
    año: 2023,
    descripcion: 'Una explosión de colores y formas asimétricas que reflejan el caos moderno.',
    imagen: '/img/obra1.jpg'
  },
  {
    id: '2',
    titulo: 'Geometría del Alma',
    autor: 'A. Torres',
    año: 2022,
    descripcion: 'Representación abstracta de las emociones humanas mediante formas geométricas.',
    imagen: '/img/obra2.jpg'
  },
  {
    id: '3',
    titulo: 'Silencio Digital',
    autor: 'M. Rojas',
    año: 2024,
    descripcion: 'La soledad en la era digital, capturada con tonos fríos y texturas pixeladas.',
    imagen: '/img/obra3.jpg'
  },
  {
    id: '4',
    titulo: 'Ecos de la Materia',
    autor: 'C. Herrera',
    año: 2021,
    descripcion: 'Un viaje sensorial a través del tiempo y el espacio.',
    imagen: '/img/obra4.jpg'
  },
  {
    id: '5',
    titulo: 'Fragmentos de Realidad',
    autor: 'S. Molina',
    año: 2023,
    descripcion: 'Collage visual que mezcla lo real y lo ilusorio.',
    imagen: '/img/obra5.jpg'
  }
];

router.get('/', (req, res) => {
  res.render('index', { titulo: 'MuseArte' });
});

router.get('/galeria', (req, res) => {
  res.render('galeria', { obras });
});

router.get('/obra/:id', (req, res) => {
  const obra = obras.find(o => o.id === req.params.id);
  if (obra) {
    res.render('obra', { obra });
  } else {
    res.status(404).send('Obra no encontrada');
  }
});

router.get('/acerca', (req, res) => {
  res.render('acerca');
});


export default router;