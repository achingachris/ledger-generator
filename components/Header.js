import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <Link href='/'>
        <a>
          <h1 className={styles.title}>Ledger Generator</h1>
        </a>
      </Link>
      <p className={styles.description}>Accounting like a Pro</p>
    </>
  )
}

export default Header
