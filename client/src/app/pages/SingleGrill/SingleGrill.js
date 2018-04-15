import React from "react";
import { GET_GRILL } from "../graphql/queries";
import { Query } from "react-apollo";
import Loader from "../components/Loader/Loader";
import GrillDetail from "../components/Grill/GrillDetail/GrillDetail";
import "./styles.css";

const SingleGrill = ({ match: { params: { _id } } }) => (
  <main className="sg-main">
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

export default SingleGrill;
