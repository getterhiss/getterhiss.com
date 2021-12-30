import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getter Hiss</title>
      </Head>

      <div>
        <h1 className="text-4xl p-4 text-brand font-bold font-serif">
          Getter Hiss
        </h1>
      </div>
      
      <Email />
      
    </>
  )
}

export default Home
