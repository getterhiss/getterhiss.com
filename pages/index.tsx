import type { NextPage } from 'next'
import Head from 'next/head'

import Email from '../components/Email'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Getter Hiss</title>
      </Head>

      <div>
        <h1 className="text-3xl font-bold text-cyan-600">
          Getter Hiss
        </h1>
      </div>
      
      <Email />
      
    </>
  )
}

export default Home
