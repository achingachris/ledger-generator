import Head from 'next/head'
import styles from '../styles/Home.module.css'

// components
import Header from '../components/Header'
import Footer from '../components/Footer'

const generate = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ledger Generator: generate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Header />
      </main>
      <Footer />
    </div>
  )
}

export default generate
