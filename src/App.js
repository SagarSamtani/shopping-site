import React from "react";
import Routes from "routes/routes";
import ShoppingAppBar from "components/ShoppingAppBar";
import { HashRouter } from "react-router-dom";

const App = props => {
  // const { match } = props;
  return (
    <HashRouter >
      <ShoppingAppBar />
      <Routes />
    </HashRouter>
  );
};

export default App;
