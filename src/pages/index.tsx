import type { NextPage } from 'next'
import Head from 'next/head'
import { Buttons, Hero, Layer, Nav } from '../components'

const Home: NextPage = () => {
  return (
    <div className='min-h-[100vh]' style={{ background: '#181C2A'}}>
      <Head>
        <title>Web3 Collection</title>
        <meta name="description" content="The biggest directory of tools and resources for web3 developers and dev-entrepreneurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <Buttons />
      <Layer />
    </div>
  )
}

export default Home
