import React from "react";
import { GET_GRILL } from "../graphql/queries";
import { Query } from "react-apollo";
import Loader from "../components/Loader/Loader";
import GrillDetail from "../components/Grill/GrillDetail/GrillDetail";

const SingleGrill = ({ match: { params: { _id } } }) => (
  <main style={styles}>
    <Query query={GET_GRILL} variables={{ _id }}>
      {({ data, loading, error }) => {
        if (loading) return <Loader message="Your Grill is loading..." />;
        if (error) return <h1>Error with finding your grill...</h1>;

        const { grill } = data;

        return <GrillDetail grill={grill} />;
      }}
    </Query>
  </main>
);

const styles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "15vh 0"
};

export default SingleGrill;
