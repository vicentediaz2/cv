function Header() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className='border-b border-[var(--color-accent-border-base)] bg-[linear-gradient(180deg,var(--color-accent-glow)_0%,transparent_38%),linear-gradient(180deg,#0f1013_0%,#101216_100%)] text-text-primary'>
      <div className='mx-auto w-[min(120rem,calc(100%-4.8rem))] px-0 py-28 text-center max-sm:w-[calc(100%-2.4rem)] max-sm:py-24'>
        <h1 className='m-0 text-[clamp(4.4rem,7vw,6.4rem)] leading-[1.05] font-semibold tracking-[0.08rem]'>
          Vicente Daniel Díaz Artigas
        </h1>
        <p className='m-0 mt-5 mb-13 text-[2.1rem] font-normal uppercase tracking-[0.28rem] text-[#f97316] max-sm:tracking-[0.18rem]'>
          Analista Programador | Desarrollo Web
        </p>
        <p className='mx-auto mb-6 max-w-[78rem] text-[1.9rem] leading-[1.75] text-text-muted'>
          Estudiante de último año de Ingeniería en Informática, con formación previa como Analista Programador, orientado al desarrollo web y a la construcción de proyectos funcionales que respondan de manera eficaz a las necesidades del usuario final.
        </p>

        <div className='mb-10 flex flex-wrap justify-center gap-4'>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Análisis
          </span>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Backend
          </span>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Datos
          </span>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Frontend
          </span>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Junior
          </span>
          <span className='rounded-full border border-[var(--color-accent-border-strong)] bg-[rgba(255,255,255,0.03)] px-5 py-3 text-[1.35rem] uppercase tracking-[0.12rem] text-accent-primary'>
            Lógica
          </span>
        </div>
        <a
          className='inline-flex min-w-[19rem] items-center justify-center rounded-2xl border border-[var(--color-accent-button-border)] px-10 py-5 text-[1.5rem] uppercase tracking-[0.18rem] text-accent-primary no-underline transition duration-200 hover:-translate-y-[0.2rem] hover:border-accent-hover hover:bg-[var(--color-accent-glow)] hover:text-accent-hover'
          href={`${baseUrl}Vicente_Diaz_cv.pdf`}
          download
        >
          Descargar CV
        </a>
      </div>
    </header>
  );
}

export default Header;
