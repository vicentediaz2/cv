import './proyectos.css';

function Proyecto({props}) {
    return (
        <div className="Proyecto">
            <div>
                <img src={props.imagen} className='Proyectos-imagen'></img>
            </div>
            <a href={props.link}>Link</a>
            <p className='Proyecto-texto'>
                {props.texto}
            </p>
        </div>
    );
  }
  
  export default Proyecto;