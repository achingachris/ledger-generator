import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Card = () => {
  return (
    <>
      <div className={styles.grid}>
        <Link href='/generate'>
          <a className={styles.card}>
            <h3>Generate &rarr;</h3>
            <p>Generate your accounts ledger in a few steps</p>
          </a>
        </Link>

        <Link href='/docs'>
          <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Learn how the simple application works</p>
          </a>
        </Link>

        
        
      </div>
    </>
  )
}

export default Card
