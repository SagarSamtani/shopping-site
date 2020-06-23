import React, { Fragment } from "react";
import Routes from "routes/routes";
import ShoppingAppBar from "components/ShoppingAppBar";

const App = props => {
  const { match } = props;
  return (
    <Fragment>
      <ShoppingAppBar />
      <Routes match={match} />
    </Fragment>
  );
};

export default App;
