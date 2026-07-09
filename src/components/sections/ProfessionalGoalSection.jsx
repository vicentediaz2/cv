function ObjetivoProfesional() {
  return (
    <section
      aria-labelledby='objetivo-profesional'
      className='mt-14 rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(16,18,22,0.88)] p-10 shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] max-sm:mt-11 max-sm:p-8'
    >
      <h2 id='objetivo-profesional' className='m-0 text-[3.8rem] font-semibold text-accent-primary'>
        Objetivo Profesional
      </h2>
      <div className='mt-8 grid gap-6 md:grid-cols-3'>
        <div className='rounded-2xl border border-[var(--color-accent-glow)] bg-[rgba(255,255,255,0.02)] p-6'>
          <p className='m-0 text-[1.3rem] uppercase tracking-[0.18rem] text-accent-primary'>Disponibilidad</p>
          <p className='mt-3 text-[1.7rem] leading-[1.65] text-text-muted'>
            Disponible para práctica profesional, roles junior y oportunidades donde pueda seguir desarrollando experiencia en entornos colaborativos.
          </p>
        </div>
        <div className='rounded-2xl border border-[var(--color-accent-glow)] bg-[rgba(255,255,255,0.02)] p-6'>
          <p className='m-0 text-[1.3rem] uppercase tracking-[0.18rem] text-accent-primary'>Fortalezas</p>
          <p className='mt-3 text-[1.7rem] leading-[1.65] text-text-muted'>
            Soy una persona que le acomoda el trabajo en equipo, resolutivo y explorar nuevas tecnologías. Tecnicamente estoy acostumbrado a trabajar con Python, JS o TS.
          </p>
        </div>
        <div className='rounded-2xl border border-[var(--color-accent-glow)] bg-[rgba(255,255,255,0.02)] p-6'>
          <p className='m-0 text-[1.3rem] uppercase tracking-[0.18rem] text-accent-primary'>Aprendizaje continuo</p>
          <p className='mt-3 text-[1.7rem] leading-[1.65] text-text-muted'>
            Como parte de mi desarrollo profesional, me enfoco en seguir aprendiendo nuevas tecnologías y nuevas formas de resolver distintos problemas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ObjetivoProfesional;
