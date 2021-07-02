import { signOut, useSession } from 'next-auth/client'
import styles from '../styles/header.module.css'
import Router from 'next/router';
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/button';


export default function Header() {
    const [session, loading] = useSession()

    return (
        <header className="container">
            <nav className={styles.nav}>
                <Link href="/">
                    <a>
                        <div className={styles.containerNav}>
                            <Image src="/banner.png" width={200} height={80} />
                        </div>
                    </a>
                </Link>
                {!session && <>
                    <Button
                        className={styles.buttonPrimary}
                        onClick={() => Router.push('/signin')}
                    >
                        Sign In
                    </Button>
                </>}
                {session && <>
                    {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />}
                    <Button
                        className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                    >
                        Sign out
                    </Button>
                </>}
            </nav>
        </header>
    )
}
