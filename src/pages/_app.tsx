import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = new ApolloClient({
    uri: "http://localhost:5000/graphql", // Confirm server's actual URL
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <NavBar />
        <Component {...pageProps} />
      </ApolloProvider>
    </div>
  );
}
