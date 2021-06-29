import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/login.module.css'


export default function LogIn() {
    const [session, loading] = useSession()

    return (
        <div className="container">
            <p className={`${(!session && loading) ? styles.loading : styles.loaded}`}>
                {!session && <>
                    <span className={styles.notSignedInText}>You are not signed in</span>
                    <a
                        className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signIn()
                        }}
                    >
                        Sign In
                    </a>
                </>}
                {session && <>
                    {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />}
                    <span className={styles.signedInText}>
                        <small>Signed in as</small><br />
                        <strong>{session.user.email || session.user.name}</strong>
                    </span>
                    <a
                        className={styles.buttonPrimary}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                    >
                        Sign out
                    </a>
                </>}
            </p>
        </div>
    )
}
