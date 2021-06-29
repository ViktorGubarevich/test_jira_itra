import React from 'react'
import { signIn, signOut, useSession, providers, getSession } from 'next-auth/client'
import Button from '../components/button';
import Header from '../components/header';
import styles from '../styles/signin.module.css';
import Auth from '../components/auth';

export default function SignIn({ providers }) {

    const [session, loading] = useSession()

    return (
        <>
            <Header />
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <div className={styles.mainContainerBox}>
                        <div>
                            <div className={styles.signIn}>
                                Sign in to your account
                            </div>
                            <Auth providers={providers} />
                        </div>
                        <div >
                            <div className={styles.line}>
                                <hr />
                                <div className={styles.lineText}>OR</div>
                            </div>
                            <form>
                                {Object.values(providers).map(provider => {
                                    if (provider.name === "Custom Provider") {
                                        return;
                                    }
                                    return (
                                        <div className={styles.signInInputButtonOther} key={provider.name}>
                                            {!session && <>
                                                <Button variant="outline" onClick={() => signIn(provider.id, { callbackUrl: 'http://localhost:3000/' })}>Sign in with {provider.name}</Button>
                                            </>}
                                            {session && <>
                                                <Button variant="outline" onClick={() => signOut(provider.id, { callbackUrl: 'http://localhost:3000/' })}>Sign out with {provider.name}</Button>
                                            </>}
                                        </div>
                                    )
                                })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

SignIn.getInitialProps = async (context) => {

    const { req, res } = context;
    const session = await getSession({ req });


    if (session && res && session.accessToken) {
        res.writeHead(302, { Location: 'http://localhost:3000/' });
        res.end();
        return;
    }

    return {
        session: undefined,
        providers: await providers(context),
    };
}


