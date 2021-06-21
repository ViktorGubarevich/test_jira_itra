import TestJiraItra from "next-auth"
import Providers from "next-auth/providers"
import axios from "axios"

export default TestJiraItra({
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        Providers.Credentials({
            name: 'Custom Provider',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const url = 'https://60d058fa7de0b200171085ef.mockapi.io/api/v1/login';
                const response = await axios.post(url, credentials);

                if (response) {
                    return response.data
                } return null
            }
        }),
    ],
    database: process.env.DATABASE_URL,
    secret: process.env.SECRET,
    session: {
        jwt: true,
    },
    jwt: {},
    pages: {},
    callbacks: {},
    events: {},
    theme: 'light',
    debug: false,
})