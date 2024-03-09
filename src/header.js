import './header.css';

function App() {
    return (
      <div className="Header">
        <header className="Header-app">
          <p className='Header-titulo'>
            Vicente Daniel Diaz Artigas
          </p>
          <p className='Header-subtitulo'>
            Analista Programador
          </p>
          <a class="Header-button" href='Vicente_Diaz_cv.pdf' download={''}>Descargar Cv</a>
        </header>
      </div>
    );
  }
  
  export default App;
  