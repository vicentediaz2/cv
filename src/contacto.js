import './contacto.css';

function Contacto() {
    return (
        <div>
            <p className='Contacto-titulo Punto'>
                Contacto
            </p>
            <div className='Contacto'>
            
                <div>
                    <p className='Contacto-texto'>
                        <img src={process.env.PUBLIC_URL +"/svg_email.svg"} className='svg' alt='email'></img>&emsp; vicentedaniel.diaz2@gmail.com
                    </p>
                    <p className='Contacto-texto'>
                        <img src={process.env.PUBLIC_URL +"/svg_telephone.svg"} className='svg' alt='telefono'></img>&emsp; +56 9 6572 7136
                    </p>
                    <a href='https://github.com/vicentediaz2'>
                        <p className='Contacto-texto'>
                            <img src={process.env.PUBLIC_URL +"/svg_github.svg"} className='svg' alt='GitHub'></img>&emsp; https://github.com/vicentediaz2
                        </p>
                    </a>
                    <a href='https://vicentediaz2.github.io/cv'>
                    <p className='Contacto-texto'>
                        <img src={process.env.PUBLIC_URL +"/svg_globe.svg"} className='svg' alt='Pagina Web'></img>&emsp; https://vicentediaz2.github.io/cv
                    </p>
                    </a>
                </div>
                <img className='imagen' src={process.env.PUBLIC_URL + "/contacto.jpg"} alt='contacto'></img>
            </div>
        </div>
    );
  }
  
  export default Contacto;