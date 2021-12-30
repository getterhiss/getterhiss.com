import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getter Hiss | React Native Developer | iOS and Android</title>
        <meta name="description" content="Entrepreneurial and driven React Native Developer. Passionate about building secure, highly performant mobile applications on iOS and Android platforms" />
      </Head>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      
        <Header />

        <h3 className="text-2xl font-sans mb-2 text-brand antialiased">I&apos;m Getter, a</h3>

        <h1 className="text-5xl font-serif mb-10 font-bold text-brand antialiased">
          React Native <br />
          developer <span className='text-6xl font-light'>who is <br />
          excited about design <br /> 
          &amp; <span className='underline decoration-wavy decoration-2 decoration-pink-400'>TypeScript</span></span>
        </h1>
        
      </div>
    </>
  )
}

export default Home
