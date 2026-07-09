const gruposSkills = [
  {
    categoria: 'Desarrollo web',
    items: [
      { nombre: 'Framework de JS' },
      { nombre: 'React' },
      { nombre: 'Tailwind CSS' },
      { nombre: 'Django' },
      { nombre: 'TypeScript' }
    ]
  }
];

function Skills() {
  return (
    <section className='w-[34rem] min-h-[30rem] overflow-hidden rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(22,25,31,0.96)] p-10 text-text-primary shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-[0.4rem] hover:border-[var(--color-accent-border-hover)] hover:bg-surface-secondary max-sm:w-full max-sm:min-h-0 max-sm:p-9'>
      <p className='m-0 text-[3.2rem] leading-[1.1] font-semibold text-accent-primary'>
        Skills
        <hr className='mt-4 h-px border-none bg-[var(--color-accent-rule)]' />
      </p>
      <p className='mt-6 mb-8 text-[1.55rem] leading-[1.65] text-text-muted'>
        Tecnologías enfocadas en desarrollo web con las que he trabajado en proyectos y práctica personal.
      </p>

      <div className='flex flex-col gap-7'>
        {gruposSkills.map((grupo) => (
          <div key={grupo.categoria} className='flex flex-col gap-4'>
            <p className='m-0 text-[1.3rem] uppercase tracking-[0.18rem] text-accent-primary'>
              {grupo.categoria}
            </p>
            <div className='flex flex-wrap gap-4'>
              {grupo.items.map((skill) => (
                <div
                  key={skill.nombre}
                  className='inline-flex min-w-[11rem] rounded-2xl border border-[var(--color-accent-border-base)] bg-[rgba(255,255,255,0.02)] px-5 py-4'
                >
                  <span className='text-[1.45rem] font-semibold text-text-primary'>{skill.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
