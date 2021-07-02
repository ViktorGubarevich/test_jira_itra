import MainLayout from '../layouts/main';
import styles from '../styles/index.module.css';
import Image from 'next/image';
import Button from '../components/button';
import Router from 'next/router';
import { signOut, useSession } from 'next-auth/client'


export default function Home() {
  const [session, loading] = useSession()
  return (
    <MainLayout>
      <div className={styles.home}>
        {!session && <>
          <span className={styles.sign}>You&apos;re not signed</span>
          <div>
            <Image src="/tasks.jpg" width={460} height={350} />
          </div>
          <Button
            className={styles.buttonPrimary}
            onClick={() => Router.push('/signin')}
          >
            Sign In
          </Button>
        </>}
        {session && <>
          {session.user.image && <span style={{ backgroundImage: `url(${session.user.image})` }} className={styles.avatar} />}
          <span className={styles.sign}>
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <div>
            <Image src="/tasks.jpg" width={460} height={350} />
          </div>
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
      </div>
    </MainLayout>
  )
}
