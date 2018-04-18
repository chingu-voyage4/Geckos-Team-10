import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import BookGrill from "../pages/BookGrill/BookGrill";
import SingleGrill from "../pages/SingleGrill/SingleGrill";

const GrillLayout = props => (
  <React.Fragment>
    <Switch>
      <Route exact path={props.match.path} component={BookGrill} />
      <Route exact path={`${props.match.path}/:_id`} component={SingleGrill} />
    </Switch>
  </React.Fragment>
);

export default withRouter(GrillLayout);
