import { Provider } from 'next-auth/client'
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";


export default function App({ Component, pageProps }) {
  return (
    <Provider
      options={{
        clientMaxAge: 0,
        keepAlive: 0
      }}
      session={pageProps.session} >
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}