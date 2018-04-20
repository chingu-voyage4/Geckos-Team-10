import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//default uri is /graphql
const client = new ApolloClient({});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.Fragment>
        <PrimaryLayout />
      </React.Fragment>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
