import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HeroPage from '../components/HeroPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Super Map Blorg</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroPage />
    </div>
  )
}
