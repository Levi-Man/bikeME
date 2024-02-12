// Bringing in the required import from 'react-router-dom' and Nav and Footer components
import { Outlet } from "react-router-dom";
import Navigation from "./components/Nav";
import Footer from "./components/Footer";
import {
  createHttpLink,
  InMemoryCache,
  ApolloClient,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Auth from "./utils/auth";
import { RentalProvider } from "./utils/GlobalContext";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  if (!Auth.loggedIn()) {
    return;
  }
  // get the authentication token from local storage if it exists
  const token = Auth.getToken();
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <ApolloProvider client={client}>
        <RentalProvider>
          <Navigation />
          <Outlet />
          <Footer />
        </RentalProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
