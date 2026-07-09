function Estudios() {
  return (
    <section className='w-[30rem] min-h-[30rem] overflow-hidden rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(22,25,31,0.96)] p-10 text-text-primary shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-[0.4rem] hover:border-[var(--color-accent-border-hover)] hover:bg-surface-secondary max-sm:w-full max-sm:min-h-0 max-sm:p-9'>
      <p className='m-0 text-[3.2rem] leading-[1.1] font-semibold text-accent-primary'>
        Estudios
        <hr className='mt-4 h-px border-none bg-[var(--color-accent-rule)]' />
      </p>
      <p className='mt-6 text-[1.75rem] leading-[1.65] text-text-muted'>
        IP Santo Tomás - Vergara
        <br />
        2024 - Actualidad
        <br />
        Ingeniería en Informática
      </p>
      <hr className='my-6 h-px border-none bg-[var(--color-accent-divider)]' />
      <p className='text-[1.75rem] leading-[1.65] text-text-muted'>
        IP Santo Tomás - San Joaquín
        <br />
        2022 - 2023
        <br />
        Analista Programador
      </p>
    </section>
  );
}

export default Estudios;
