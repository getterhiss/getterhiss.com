import type { NextPage } from 'next';
import Head from 'next/head';

import NavBar from 'components/NavBar';
import Hero from 'components/Hero';
import * as SVG from 'icons';

const Home: NextPage = () => {
  const COLOR = '#808080';

  return (
    <>
      <Head>
        <title>Getter Hiss | React Native Developer | iOS and Android</title>
        <meta
          name="description"
          content="Entrepreneurial and driven React Native Developer."
        />
      </Head>

      <div className="max-w-7xl py-5 px-4 mx-auto lg:px-12">
        <NavBar />

        <Hero />

        <section className="py-6 md:py-10 max-w-5xl">
          <div>
            <p className="section-title">My Skills</p>
            <h2 className="h2">
              <strong className="h2-bold">Entrepreneurial and driven</strong>
              <br className="hidden sm:block" /> mobile &amp; web developer
            </h2>
            <p className="subtitle max-w-4xl">
              Years of traveling around the world and living in different cities
              around Asia, Europe and North America has given me the ability to
              quickly adjust to new situations and learn on the go. I enjoy
              working with people that are passionate, curious and creative
              (with a sense of humor) just like me. I am open for positions
              where I can make an impact, including founding/leading roles.
            </p>
          </div>
          <div className="grid-container">
            <div className="md:pr-12">
              <h3 className="h3">Mobile development</h3>
              <p className="p">
                I have extensive knowledge as a Sr. React Native Developer of
                the entire iOS and Android ecosystems. From dealing in Native
                code, to each respective App Store submission and approval
                processes. I&apos;m excited to write performant code pushing the
                boundaries of what&apos;s possible.
              </p>
              <div className="space-x-4 py-6 lg:space-x-6 lg:py-8">
                <SVG.ReactIcon className="svg-icon" />
                <SVG.ReduxIcon className="svg-icon" />
                <SVG.TypeScriptIcon className="svg-icon" />
                <SVG.AppleIcon className="svg-icon" />
                <SVG.AndroidIcon className="svg-icon" />
              </div>
            </div>
            <div className="md:pr-12">
              <h3 className="h3">Front-end development</h3>
              <p className="p">
                At my core, I am a React fanatic. So makes sense I&apos;d love
                Next.js as well. I&apos;ve dabbled in Gatsby and of course
                vanilla React apps, but nothing beats the server-side rendering
                (SSR) and API routes that Next.js provides out-of-the-box. Add
                in Tailwind CSS and now we&apos;re really cooking!
              </p>
              <div className="space-x-4 py-6 lg:space-x-6lg:py-8">
                <SVG.NextIcon className="svg-icon" />
                <SVG.TailwindIcon className="svg-icon" />
                <SVG.GraphQLIcon className="svg-icon" />
                <SVG.FigmaIcon className="svg-icon" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10 max-w-5xl">
          <div>
            <p className="section-title">Open Source</p>
            <h2 className="h2">
              <strong className="h2-bold">Passionate about </strong>
              Open Source <br className="hidden sm:block" /> projects and
              contributions
            </h2>
            <p className="subtitle max-w-3xl">
              I&apos;m looking to get more involved in the Open Source community
              in a big way. I&apos;ve been working on open sourcing my own
              bigger projects including some smaller TypeScript / React / React
              Native libraries.
            </p>
          </div>
          <div className="grid-container">
            <div className="md:pr-12">
              <h3 className="h3">React Native</h3>
              <p className="p">
                I&apos;ve open sourced a fun personal project Getter.dev, an iOS
                and Android application built on React Native. Includes
                TypeScript, Lottie, Twilio Video (WebRTC), React Error
                Boundaries &amp; React Navigation.
              </p>
              <a
                className="link text-indigo-600 underline pt-4"
                href="https://github.com/getterhiss/getter.dev"
                rel="noreferrer"
                target="_blank"
              >
                View more
              </a>
              <div className="py-6 lg:py-8 space-y-6 lg:space-y-8">
                <div className="space-x-4 lg:space-x-6">
                  <SVG.ReactIcon className="svg-icon" color={COLOR} />
                  <SVG.ReduxIcon className="svg-icon" color={COLOR} />
                  <SVG.TypeScriptIcon className="svg-icon" color={COLOR} />
                  <SVG.AppleIcon className="svg-icon" color={COLOR} />
                  <SVG.AndroidIcon className="svg-icon" color={COLOR} />
                </div>
                <div className="space-x-4 lg:space-x-6">
                  <SVG.TwilioIcon className="svg-wide-icon" />
                  <SVG.StripeIcon className="svg-wide-icon" />
                </div>
              </div>
            </div>
            <div className="md:pr-12">
              <h3 className="h3">Next.js Website</h3>
              <p className="p">
                I&apos;ve open sourced this website, a Next.js server-side
                rendered (SSR) React Application. Includes TypeScript, Redux
                Toolkit, Tailwind CSS and Google Web Fonts. The website is
                hosted on Vercel.
              </p>
              <a
                className="link text-indigo-600 underline pt-4"
                href="https://github.com/getterhiss/getterhiss.com"
                rel="noreferrer"
                target="_blank"
              >
                View more
              </a>
              <div className="py-6 lg:py-8 space-y-6 lg:space-y-8">
                <div className="space-x-4 lg:space-x-6">
                  <SVG.NextIcon className="svg-icon" color={COLOR} />
                  <SVG.TailwindIcon className="svg-icon" color={COLOR} />
                  <SVG.ReactIcon className="svg-icon" color={COLOR} />
                  <SVG.ReduxIcon className="svg-icon" color={COLOR} />
                  <SVG.TypeScriptIcon className="svg-icon" color={COLOR} />
                </div>
                <div className="space-x-4 lg:space-x-6">
                  <SVG.VercelIcon className="svg-wide-icon" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-10">
          <div>
            <p className="section-title">About Me</p>
            <h2 className="h2">
              <strong className="h2-bold">Some things </strong>
              you might not
              <br className="hidden sm:block" /> know about me
            </h2>
          </div>
          <div className="md:grid md:grid-cols-2">
            <div className="pb-4 mb-6 md:mb-10 md:mr-14">
              <h4 className="h4">Do you speak any other languages?</h4>
              <p className="answer">
                I speak four languages. English, Estonian, Japanese and Russian.
                I was born in Estonia, but lived in England when I was 5.
                I&apos;ve also lived in Japan and took Japanese at University.
              </p>
            </div>
            <div className="pb-4 mb-6 md:mb-10 md:mr-14">
              <h4 className="h4">Where are you currently located?</h4>
              <p className="answer">
                I&apos;m currently in sunny Southern California, though I have
                lived all over. Originally from Europe, I&apos;ve lived in
                Tallinn and Barcelona. I&apos;ve also spent years in Asia with
                the majority of time in Tokyo and Bali.
              </p>
            </div>
            <div className="pb-4 mb-6 md:mb-10 md:mr-14">
              <h4 className="h4">
                What do you do when you&apos;re not programming?
              </h4>
              <p className="answer">
                I love to rock climb! It helps me get into a flow state and get
                outside my own thoughts, otherwise I can&apos;t stop thinking
                about code (It&apos;s like the Matrix). I also love to ride an
                Electric bike all around the city, go for walks in the Zoo.
              </p>
            </div>
            <div className="pb-4 mb-6 md:mb-10 md:mr-14">
              <h4 className="h4">
                What would you be doing if you weren&apos;t a software engineer?
              </h4>
              <p className="answer">
                If I didn&apos;t have a strong desire to pursue a career in
                STEM, I probably would&apos;ve become a ballerina. I danced
                since I was 3 years old and even went to a professional ballet
                school when I was young.
              </p>
            </div>
          </div>
        </section>

        <div className="h-32"></div>
      </div>
    </>
  );
};

export default Home;
