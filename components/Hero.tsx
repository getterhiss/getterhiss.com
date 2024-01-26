import SuperWoman from 'icons/SuperWoman';

const Hero = () => {
  return (
    <header className="md:py-10">
      <SuperWoman className="mx-auto -mt-12 md:hidden h-80" />

      <div className="md:grid md:grid-cols-5">
        <div className="max-w-lg md:max-w-full md:my-auto md:col-span-3 lg:mr-2">
          <h3 className="sm:text-lg md:text-xl lg:text-2xl mb-2 text-brand antialiased">
            Hi, I&apos;m Getter
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-10 text-brand antialiased">
            <strong className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Lead Mobile Engineer,{' '}
            </strong>
            passionate about UI/UX design &amp;{' '}
            <span className="underline decoration-wavy decoration-2 decoration-pink-400">
              shipping things fast
            </span>
          </h1>
          <p className="subtitle max-w-4xl">
            Expert in designing, building, and scaling mobile platforms. In addition to technical
            leadership, my latest experience includes managing the day-to-day work of an engineering
            team and being a Scrum Master. I advocate an iterative approach to development to not
            let perfect be the enemy of good.
          </p>
        </div>

        <div className="hidden md:block md:col-span-2">
          <SuperWoman />
        </div>
      </div>
    </header>
  );
};
export default Hero;
