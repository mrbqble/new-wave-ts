import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  let asyncToken = localStorage.getItem('token')
  return {
    headers: {
    ...headers,
    authorization: asyncToken ? `Bearer ${asyncToken}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function Apollo({children}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo