import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from 'components/NavBar';
import Hero from 'components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getter Hiss | React Native Developer | iOS and Android</title>
        <meta
          name="description"
          content="Entrepreneurial and driven React Native Developer."
        />
      </Head>

      <div className="max-w-6xl py-5 px-4 mx-auto lg:px-12">
        <NavBar />

        <Hero />

        <section className="md:py-10">
          <div>
            <p>My Skills</p>
            <h1 className="h2">
              <strong className="text-4xl">Entrepreneurial and driven</strong>
              <br /> mobile &amp; web developer
            </h1>
            <p>
              Years of traveling around the world and living in different cities
              around Asia, Europe and North America has given me the ability to
              quickly adjust to new situations and learn on the go. I enjoy
              working with people that are passionate, curious and creative
              (with a sense of humor) just like me. I am open for positions
              where I can make an impact, including founding/leading roles.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 lg:space-x-12 lg:mt-12">
            <div>
              <h2>Mobile development</h2>
              <p>
                I have extensive knowledge as a Sr. React Native Developer of
                the entire iOS and Android ecosystems. From dealing in Native
                code, to each respective App Store submission and approval
                processes. I&apos;m excited to write performant code pushing the
                boundaries of what&apos;s possible.
              </p>
              <div>[SVG ICONS]</div>
            </div>
            <div>
              <h2>Front-end development</h2>
              <p>
                At my core, I am a React fanatic. So makes sense I&apos;d love
                Next.js as well. I&apos;ve dabbled in Gatsby and of course
                vanilla React apps, but nothing beats the server-side rendering
                (SSR) and API routes that Next.js provides out-of-the-box. Add
                in Tailwind CSS and now we&apos;re really cooking!
              </p>
              <div>[SVG ICONS]</div>
            </div>
          </div>
        </section>

        <section className="md:py-10">
          <div>
            <p>Open Source</p>
            <h1 className="h2">
              <strong className="text-4xl">Passionate about </strong>
              Open Source <br /> projects and contributions
            </h1>
            <p>
              I&apos;m looking to get more involved in the Open Source community
              in a big way. I&apos;ve been working on open sourcing my own
              bigger projects including some smaller TypeScript / React / React
              Native libraries.
            </p>
          </div>
          <div className="md:grid md:grid-cols-2 lg:space-x-12 lg:mt-12">
            <div>
              <h2>React Native</h2>
              <p>
                I&apos;ve open sourced a fun personal project Getter.dev, an iOS
                and Android application built on React Native. Includes
                TypeScript, Lottie, Twilio Video (WebRTC), React Error
                Boundaries &amp; React Navigation.
              </p>
              <a className="link">View more</a>
              <div>[SVG ICONS]</div>
            </div>
            <div>
              <h2>Next.js Website</h2>
              <p>
                I&apos;ve open sourced this website, a Next.js server-side
                rendered (SSR) React Application. Includes TypeScript, Tailwind
                CSS and Google Web Fonts. The website is hosted on Vercel.
              </p>
              <a className="link">View more</a>
              <div>[SVG ICONS]</div>
            </div>
          </div>
        </section>

        <section className="md:py-10">
          <div>
            <p>About Me</p>
            <h1 className="h2">
              <strong className="text-4xl">Some things </strong>
              you might <br /> not know about me
            </h1>
          </div>
          <div className="md:grid md:grid-cols-2 lg:mt-12">
            <div>
              <h2>Do you speak any other languages?</h2>
              <p className="pb-10 pr-14">
                I speak four languages. English, Estonian, Japanese and Russian.
                I was born in Estonia, but lived in England when I was 5.
                I&apos;ve also lived in Japan and took Japanese at University.
              </p>
            </div>
            <div>
              <h2>Where are you currently located?</h2>
              <p className="pb-10 pr-14">
                I&apos;m currently in sunny Southern California, though I have
                lived all over. Originally from Europe, I&apos;ve lived in
                Tallinn and Barcelona. I&apos;ve also spent years in Asia with
                the majority of time in Tokyo and Bali.
              </p>
            </div>
            <div>
              <h2>What do you do when you&apos;re not programming?</h2>
              <p className="pb-10 pr-14">
                I love to rock climb! It helps me get into a flow state and get
                outside my own thoughts, otherwise I can&apos;t stop thinking
                about code (It&apos;s like the Matrix). I also love to ride an
                Electric bike all around the city, go for walks in the Zoo.
              </p>
            </div>
            <div>
              <h2>
                What would you be doing if you weren&apos;t a software engineer?
              </h2>
              <p className="pb-10 pr-14">
                If I didn&apos;t have a strong desire to pursue a career in
                STEM, I probably would&apos;ve become a ballerina. I danced
                since I was 3 years old and even went to a professional ballet
                school when I was young.
              </p>
            </div>
          </div>
        </section>

        <div className="h-44"></div>
      </div>
    </>
  );
};

export default Home;
