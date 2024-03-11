import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header'
import About from './tarjeta_about'
import Estudios from './tarjeta_estudios'
import Skills from './tarjeta_skills'
import Proyectos from './proyectos'
import Contacto from './contacto';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header></Header>
    <div className='section1'>
      <About></About>
      <Estudios></Estudios>
      <Skills></Skills>
    </div>
      <Proyectos></Proyectos>
      <Contacto></Contacto>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
