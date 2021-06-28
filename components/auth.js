import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/signin.module.css';
import Button from './button';
import Input from './input';



export default function Auth({ providers }) {

    const [session, loading] = useSession()

    return (
        <form method="post" action="/api/auth/signin/costum">
            <label for="username" className={styles.signInInput}>
                User Name<span>*</span>
                <Input type="text" id="username" name="username" placeholder="Enter your user name" />
            </label>
            <label for="pass" className={styles.signInInput}>
                Password<span>*</span>
                <Input type="password" id="pass" name="password" minlength="8" required placeholder="Enter your password" />
            </label>
            {Object.values(providers).map(provider => {
                if (provider.name === "Custom Provider") {
                    return (
                        <div className={styles.signInInputButton} key="Custom Provider">
                            {!session && <>
                                <Button type="submit" variant="outline" onClick={() => signIn("credentials", { callbackUrl: 'http://localhost:3000/' })}>Sign In</Button>
                            </>}
                            {session && <>
                                <Button type="submit" variant="outline" onClick={() => signOut("credentials", { callbackUrl: 'http://localhost:3000/' })}>Sign Out</Button>
                            </>}
                        </div>
                    );
                }
            })}
        </form>
    );
}