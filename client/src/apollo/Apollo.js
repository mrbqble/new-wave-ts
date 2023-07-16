import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://new-wave-ts.onrender.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  let asyncToken = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: asyncToken ? `Bearer ${asyncToken}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function Apollo({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Apollo;
