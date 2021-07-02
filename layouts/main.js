import BaseLayout from './base'
import Footer from './footer'
import Header from './header'
import Page from './page'

export default function MainLayout({ children }) {
    return (
        <BaseLayout>
            <Header />
            <Page>{children}</Page>
            <Footer />
        </BaseLayout>
    )
}