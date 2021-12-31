import SuperWoman from 'components/SuperWoman';

const Hero = () => {
  return (
    <header className="lg:pb-12 space-y-2 lg:space-y-0 lg:space-x-12">
      <SuperWoman className="mx-auto -mt-12 md:hidden h-80" />

      <div className="md:grid md:grid-cols-5">
        <div className="md:max-w-full md:my-auto md:col-span-3 lg:mr-2">
          <h3 className="text-2xl font-sans mb-2 text-brand antialiased">
            I&apos;m Getter, a
          </h3>

          <h1 className="text-5xl font-serif mb-10 font-bold text-brand antialiased">
            React Native <br />
            developer,{' '}
            <span className="text-6xl font-light">
              who is excited about design &amp;{' '}
              <span className="underline decoration-wavy decoration-2 decoration-pink-400">
                TypeScript
              </span>
            </span>
          </h1>
        </div>

        <SuperWoman className="hidden md:block md:col-span-2 h-full" />
      </div>
    </header>
  );
};
export default Hero;
