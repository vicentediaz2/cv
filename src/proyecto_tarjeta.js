import './proyectos.css';

function Proyecto({props}) {
    return (
        <div className="Proyecto">
            <div>
                <img src={process.env.PUBLIC_URL +"/"+ props.imagen} className='Proyectos-imagen' alt='imagen referencial'></img>
            </div>
            <a href={props.link}>Link</a>
            <p className='Proyecto-texto'>
                {props.texto}
            </p>
        </div>
    );
  }
  
  export default Proyecto;