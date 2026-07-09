import Header from '../components/layout/Header.jsx';
import About from '../components/sections/AboutCard.jsx';
import Estudios from '../components/sections/StudiesCard.jsx';
import Skills from '../components/sections/SkillsCard.jsx';
import Proyectos from '../components/sections/ProjectsSection.jsx';
import ObjetivoProfesional from '../components/sections/ProfessionalGoalSection.jsx';
import Contacto from '../components/sections/ContactSection.jsx';

function App() {
  return (
    <>
      <Header />
      <main className='mx-auto w-[min(120rem,calc(100%-4.8rem))] pb-32 max-md:w-[min(96rem,calc(100%-3.2rem))] max-sm:w-[calc(100%-2.4rem)]'>
        <section
          aria-label='Información principal'
          className='my-14 flex flex-wrap justify-center gap-8 max-md:mt-10 max-md:gap-6 max-sm:mt-8'
        >
          <About />
          <Estudios />
          <Skills />
        </section>
        <Proyectos />
        <ObjetivoProfesional />
        <Contacto />
      </main>
    </>
  );
}

export default App;
