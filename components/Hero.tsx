import SuperWoman from 'components/SuperWoman';

const Hero = () => {
  return (
    <header className="md:py-10">
      <SuperWoman className="mx-auto -mt-12 md:hidden h-80" />

      <div className="md:grid md:grid-cols-5">
        <div className="md:max-w-full md:my-auto md:col-span-3 lg:mr-2">
          <h3 className="text-2xl mb-2 text-brand antialiased">
            I&apos;m Getter, a
          </h3>

          <h1 className="text-6xl font-serif mb-10 text-brand antialiased">
            <strong className="text-5xl">React Native developer, </strong>
            who is excited about design &amp;{' '}
            <span className="underline decoration-wavy decoration-2 decoration-pink-400">
              TypeScript
            </span>
          </h1>
        </div>

        <SuperWoman className="hidden md:block md:col-span-2 h-full" />
      </div>
    </header>
  );
};
export default Hero;
