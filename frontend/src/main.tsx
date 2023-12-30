import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { UserProvider } from "./context/userContext.tsx";

import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === "production" ? "/" : "http://localhost:5000/",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url:
      process.env.NODE_ENV === "production"
        ? window.location.origin.replace(/^http/, "ws")
        : "ws://localhost:5000/",
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  uri: process.env.NODE_ENV === "production" ? "/" : "http://localhost:5000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <UserProvider>
          <App />
        </UserProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
