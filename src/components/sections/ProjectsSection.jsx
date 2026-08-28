import Proyecto from './ProjectCard.jsx';

const proyectos = [
  {
    titulo: 'Práctica profesional',
    imagen: 'SMA.svg',
    stack: ['Cypress', 'e2e', 'Django'],
    texto: 'Participé en una célula de trabajo en SMA durante 3 meses.',
    aporte: 'Desarrollé pruebas funcionales, unitarias y e2e para diversos sistemas.'
  },
  {
  titulo: 'rfid-attendance-dashboard',
  imagen: 'dashboard.png',
  link: 'https://github.com/vicentediaz2/rfid-attendance-dashboard/',
  stack: ['React', 'Vite', 'Express', 'Firebase '],
  texto: 'Proyecto universitario que visualiza datos de Firebase.',
  aporte: 'Fui el principal Desarrollador del consumo y visualizacion de datos'
},
{
  titulo: 'rfid-attendance-iot',
  imagen: 'IoT.png',
  link: 'https://github.com/vicentediaz2/rfid-attendance-iot',
  stack: ['Wokwi', 'ESP32', 'Firebase'],
  texto: 'Proyecto universitario que conencta un rfid y ESP32 con firebase',
  aporte: 'Apoye en el desarrollo y arquitectura del sistema.'
},
  {
    titulo: 'Portafolio web personal',
    imagen: 'proyecto1.png',
    link: 'https://vicentediaz2.github.io/cv/',
    stack: ['React', 'Vite', 'Tailwind'],
    texto: 'Sitio personal orientado a presentar mi perfil, estudios, habilidades y proyectos en un formato claro y profesional.',
    aporte: 'Trabajé en la estructura, el diseño visual, la organización del contenido y la publicación en GitHub Pages.'
  },
    {
    titulo: 'Plugins para videojuegos',
    imagen: 'python.png',
    stack: ['Python', 'Plugins'],
    texto: 'De forma independiente, he desarrollado pequeños proyectos relacionados con plugins, mods y complementos para videojuegos.',
    aporte: 'He trabajado en plugins desarrollados con Python.'
  },
  {
    titulo: 'COTISER',
    imagen: 'COTISER.png',
    link: 'https://vicentediaz2.github.io/COTISER/',
    stack: ['Next.js', 'Supabase', 'Tailwind'],
    texto: 'Desarrolle un micro Saas.',
    aporte: 'Desarrolle todo la estructura y codigo de un servicio Saas real.'
  }
];

function Proyectos() {
  return (
    <section className='mt-14 max-sm:mt-11' aria-labelledby='proyectos-titulo'>
      <h2 id='proyectos-titulo' className='mb-10 text-[3.8rem] font-semibold text-accent-primary'>
        Proyectos y experiencia
      </h2>
      <p className='mt-6 mb-8 text-[1.55rem] leading-[1.65] text-text-muted'>
        Más de 1 año de experiencia en proyectos personales gestionados de forma autodidacta, enfocados en complementos para videojuegos y desarrollo web.
      </p>
      <div className='flex flex-wrap justify-center gap-7'>
        {proyectos.map((proyecto) => (
          <Proyecto
            key={proyecto.link ?? proyecto.titulo}
            imagen={proyecto.imagen}
            link={proyecto.link}
            titulo={proyecto.titulo}
            stack={proyecto.stack}
            texto={proyecto.texto}
            aporte={proyecto.aporte}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
