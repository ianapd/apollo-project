import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( 
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
