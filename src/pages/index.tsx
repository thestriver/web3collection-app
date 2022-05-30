import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Head>
        <title>Web3 Collection</title>
        <meta name="description" content="The biggest directory of tools and resources for web3 developers and dev-entrepreneurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
