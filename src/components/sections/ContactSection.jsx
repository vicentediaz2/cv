function Contacto() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className='pb-8' aria-labelledby='contacto-titulo'>
      <h2 id='contacto-titulo' className='mt-24 mb-10 text-[3.8rem] font-semibold text-accent-primary max-sm:mt-20'>
        Contacto
      </h2>
      <div className='mb-8 flex flex-wrap items-start justify-between gap-8 rounded-[1.4rem] border border-[var(--color-accent-border-soft)] bg-[rgba(16,18,22,0.88)] p-11 shadow-[0_1.8rem_4.2rem_rgba(0,0,0,0.28)] max-md:justify-center max-md:p-9 max-sm:gap-6 max-sm:p-8'>
        <div className='basis-[42rem] grow'>
          <p className='mt-0 mb-8 text-[1.75rem] leading-[1.7] text-text-muted'>
            Disponible para práctica profesional y oportunidades junior relacionadas con el desarrollo web y de software.
          </p>
          <p className='mb-8 flex items-center gap-5 text-[1.9rem] text-text-muted max-sm:items-start'>
            <span
              aria-hidden='true'
              className='contact-icon'
              style={{
                maskImage: `url(${baseUrl}svg_email.svg)`,
                WebkitMaskImage: `url(${baseUrl}svg_email.svg)`
              }}
            />
            <a className='text-text-primary no-underline transition duration-200 hover:text-accent-hover' href='mailto:vicentedaniel.diaz2@gmail.com'>
              vicentedaniel.diaz2@gmail.com
            </a>
          </p>
          <p className='mb-8 flex items-center gap-5 text-[1.9rem] text-text-muted max-sm:items-start'>
            <span
              aria-hidden='true'
              className='contact-icon'
              style={{
                maskImage: `url(${baseUrl}svg_telephone.svg)`,
                WebkitMaskImage: `url(${baseUrl}svg_telephone.svg)`
              }}
            />
            <a className='text-text-primary no-underline transition duration-200 hover:text-accent-hover' href='tel:+56965727136'>
              +56 9 6572 7136
            </a>
          </p>
          <p className='mb-8 flex items-center gap-5 text-[1.9rem] text-text-muted max-sm:items-start'>
            <span
              aria-hidden='true'
              className='contact-icon'
              style={{
                maskImage: `url(${baseUrl}svg_github.svg)`,
                WebkitMaskImage: `url(${baseUrl}svg_github.svg)`
              }}
            />
            <a
              className='text-text-primary no-underline transition duration-200 hover:text-accent-hover'
              href='https://github.com/vicentediaz2'
              target='_blank'
              rel='noreferrer'
            >
              github.com/vicentediaz2
            </a>
          </p>
          <p className='m-0 flex items-center gap-5 text-[1.9rem] text-text-muted max-sm:items-start'>
            <span
              aria-hidden='true'
              className='contact-icon'
              style={{
                maskImage: `url(${baseUrl}svg_globe.svg)`,
                WebkitMaskImage: `url(${baseUrl}svg_globe.svg)`
              }}
            />
            <a
              className='text-text-primary no-underline transition duration-200 hover:text-accent-hover'
              href='https://vicentediaz2.github.io/cv'
              target='_blank'
              rel='noreferrer'
            >
              vicentediaz2.github.io/cv
            </a>
          </p>
        </div>
        <img
          className='h-[28rem] w-[28rem] rounded-[1.2rem] border border-[var(--color-accent-border-base)] object-cover max-sm:h-auto max-sm:w-full max-sm:max-w-[28rem]'
          src={`${baseUrl}DEV.png`}
          alt='Foto de contacto'
        />
      </div>
    </section>
  );
}

export default Contacto;
