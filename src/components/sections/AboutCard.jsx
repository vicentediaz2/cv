function About() {
  return (
    <section className='w-[39rem] min-h-[29rem] overflow-hidden rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(22,25,31,0.96)] p-10 text-text-primary shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-[0.4rem] hover:border-[var(--color-accent-border-hover)] hover:bg-surface-secondary max-sm:w-full max-sm:min-h-0 max-sm:p-9'>
      <p className='m-0 text-[3.2rem] leading-[1.1] font-semibold text-accent-primary'>
        Sobre Mí
        <hr className='mt-4 h-px border-none bg-[var(--color-accent-rule)]' />
      </p>
      <p className='mt-6 text-[1.75rem] leading-[1.65] text-text-muted'>
        Soy un perfil en formación orientado al desarrollo de software, con especial interés en el desarrollo web, la construcción de interfaces y la resolución de problemas mediante código claro y mantenible.
      </p>
      <p className='mt-5 text-[1.75rem] leading-[1.65] text-text-muted'>
        Me interesa integrarme a equipos donde pueda seguir aprendiendo, aportar con responsabilidad y convertir conocimientos académicos y proyectos personales en experiencia profesional real.
      </p>
    </section>
  );
}

export default About;
