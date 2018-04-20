import React from "react";
import GrillList from "../../components/Grill/GrillList";
import { Query } from "react-apollo";
import { GET_GRILLS } from "../../graphql/queries";
import Loader from "../../components/Loader/Loader";
import "./styles.css";

const BookGrill = () => (
  <main className="bg-main-container">
    <header>
      <h1>Here are some Grills near you...</h1>
    </header>
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

export default BookGrill;
