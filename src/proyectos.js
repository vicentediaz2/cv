import './proyectos.css';
import Proyecto from './proyecto_tarjeta';

function Proyectos() {
    return (

        <div className="Proyectos">
            <p className='Proyectos-titulo Punto'>
                Proyectos <span className='Punto'>:</span>
            </p>
            <div className='Proyectos-contenedor'>
                <Proyecto props={{imagen: "proyecto1.png", link: "https://vicentediaz2.github.io/cv/",
                texto: "Proyecto de mi Curriculum Vitae y Portafolio Web creado con React y alojado de GutHub Page"}}>
                </Proyecto>
                <Proyecto props={{imagen: "proyecto2.png", link: "https://vicentediaz2.github.io/juego-memoria/",
                texto: "Simple juego de memorice realizado con React y alojado en GitHub Page, "}}>
                </Proyecto>

            </div>
        </div>

    );
  }
  
  export default Proyectos;