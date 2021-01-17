import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ledger Generator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Header />
        <Card />
      </main>
      <Footer />
    </div>
  )
}

export default Home
