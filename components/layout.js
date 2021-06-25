import Header from '../components/header'
import LogIn from '../components/login'

export default function Layout({ children }) {
    return (
        <>
            <LogIn />
            <Header />
            <main>{children}</main>
        </>
    )
}