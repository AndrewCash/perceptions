import Link from 'next/link'
import Image from 'next/image'
import styles from '../components/header.module.css'

import '../styles/styles.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/" passHref className='logo'>
        <Image 
          alt="Home Image" 
          src="/../public/logo.svg" 
          className="header__logo" 
          width="200"
          height="200"
        />
      </Link>
      <Link href="/" passHref>
        <h1 className="header__title" >Perception Zero</h1>
      </Link>
      <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
        <span className="header__price snipcart-total-price">Hello</span>
      </a>
    </header>
  )
}
