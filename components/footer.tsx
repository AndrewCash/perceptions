import styles from '../components/footer.module.css'

export default function Footer(){
    return (
      <footer className={styles.footer}>
        <a>
          EST. 2021
        </a>

        <a
          href="https://csh.casa"
          target="_blank"
          rel="noopener noreferrer"
          >
          Made in USA
        </a>
      </footer>
    )
  }