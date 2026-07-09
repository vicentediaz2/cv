function Proyecto({ imagen, link, titulo, stack, texto, aporte }) {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <article className='min-h-[37rem] w-[min(100%,34rem)] overflow-hidden rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(22,25,31,0.96)] text-text-primary shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] transition duration-200 hover:-translate-y-[0.4rem] hover:border-[var(--color-accent-border-hover)] hover:bg-surface-secondary max-sm:w-full'>
      {imagen ? (
        <img
          src={`${baseUrl}${imagen}`}
          className='block h-[22rem] w-full border-b border-[var(--color-accent-border-soft)] object-cover'
          alt='Imagen referencial del proyecto'
        />
      ) : (
        <div className='flex h-[22rem] w-full items-end border-b border-[var(--color-accent-border-soft)] bg-[radial-gradient(circle_at_top,rgba(255,106,0,0.2),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),linear-gradient(180deg,#171a20_0%,#101216_100%)] px-8 py-7'>
          <span className='text-[1.25rem] uppercase tracking-[0.2rem] text-accent-primary'>
            Proyecto independiente
          </span>
        </div>
      )}
      <div className='px-8 pt-8'>
        <h3 className='m-0 text-[2.4rem] font-semibold text-text-primary'>{titulo}</h3>
        <div className='mt-4 flex flex-wrap gap-3'>
          {stack.map((item) => (
            <span
              key={item}
              className='rounded-full border border-[var(--color-accent-border-base)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[1.2rem] uppercase tracking-[0.08rem] text-accent-primary'
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <p className='mx-8 mt-6 text-[1.75rem] leading-[1.65] text-text-muted'>
        {texto}
      </p>
      <p className='mx-8 mt-4 text-[1.55rem] leading-[1.65] text-text-muted'>
        <span className='text-text-primary'>Mi aporte:</span> {aporte}
      </p>
      {link ? (
        <a
          className='mx-8 mt-8 mb-9 inline-block text-[1.45rem] uppercase tracking-[0.16rem] text-accent-primary no-underline transition duration-200 hover:text-accent-hover'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          Ver proyecto
        </a>
      ) : (
        <p className='mx-8 mt-8 mb-9 text-[1.35rem] uppercase tracking-[0.16rem] text-text-muted'>
          Proyecto sin demo pública
        </p>
      )}
    </article>
  );
}

export default Proyecto;
