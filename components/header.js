import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'


export default function Header() {

  return (
    <header>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <div className={styles.containerNav}>
                <Image src="/banner.png" width={200} height={80} />
              </div>
            </a>
          </Link>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
