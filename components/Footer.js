import styles from '../styles/Home.module.css'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <>
      <footer className={styles.footer}>
          <p>
             Chris Made It on {year} | hosted on <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
          </p>
        
      </footer>
    </>
  )
}

export default Footer

