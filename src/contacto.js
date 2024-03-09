import './contacto.css';

function Contacto() {
    return (
        <div className="Contacto">
            <div>
                <p className='Contacto-titulo Punto'>
                    Contacto <span className='Punto'>.</span>
                </p>
                <p className='Contacto-texto'>
                    <img src="svg_email.svg" className='svg'></img>&emsp; vicentedaniel.diaz2@gmail.com
                </p>
                <p className='Contacto-texto'>
                    <img src="svg_telephone.svg" className='svg'></img>&emsp; +56 9 6572 7136
                </p>
                <p className='Contacto-texto'>
                    <img src="svg_github.svg" className='svg'></img>&emsp; https://github.com/vicentediaz2
                </p>
                <p className='Contacto-texto'>
                    <img src="svg_globe.svg" className='svg'></img>&emsp; https://vicentediaz2.github.io/cv
                </p>
            </div>
            <img className='imagen' src='contacto.jpg' alt='contacto'></img>
        </div>
    );
  }
  
  export default Contacto;