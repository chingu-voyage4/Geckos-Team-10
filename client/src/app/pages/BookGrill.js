import React from "react";
import GrillList from "../components/Grill/GrillList";
import { Query } from "react-apollo";
import { GET_GRILLS } from "../graphql/queries";
import Loader from "../components/Loader/Loader";

const BookGrill = () => (
  <main style={styles}>
    <Query query={GET_GRILLS}>
      {({ data, loading, error }) => {
        if (loading) return <Loader message="Loading..." />;
        if (error) return <h1>error...</h1>;

        const { grills } = data;

        return <GrillList grills={grills} />;
      }}
    </Query>
  </main>
);

const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "25vh"
};

export default BookGrill;
