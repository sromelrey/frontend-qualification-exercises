"use client";
// ^ this file needs the "use client" pragma

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const authLink = setContext((_, { headers }) => {
  // Retrieve your authorization token from local storage or another source
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjakp0ZFdQaGhkUHlYU25SdSIsInJvbGUiOiJBRE1JTiIsImp0aSI6ImE4MjFlYjM1Y2NmZjI0NjAwNjI0ZGFjYSIsImlwQWRkcmVzcyI6IjE0My40NC4xOTIuMTA3IiwibG9jYXRpb24iOiJDYWdheWFuIGRlIE9ybywgUGhpbGlwcGluZXMiLCJwbGF0Zm9ybSI6IjEydXd1UkNjWXAxY1dpWHpQWSIsImlhcCI6IjIwMjQtMDQtMjRUMDA6MTc6MjAuMDI4KzAwOjAwIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxMzkxNzg3MCwiZXhwIjoxNzc2OTg5ODcwfQ.UfB36fjFrYvg8TV9VYEtNfG6CzRlz9pnjKnqfru-1Hc";

  // Return the headers object with the authorization header
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://report.development.opexa.io/graphql",

    fetchOptions: { cache: "no-store" },
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            authLink.concat(httpLink),
          ])
        : authLink.concat(httpLink),
  });
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
