import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Cart = lazy(() => import("components/Cart")),
  NoMatch = lazy(() => import("components/NoMatch")),
  Dashboard = lazy(() => import("components/Dashboard"));

console.log("process.env.PUBLIC_URL routesjs", process.env.PUBLIC_URL);

const Routes = () => (
  <Suspense fallback={<div> Loading... </div>}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/cart" component={Cart} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Suspense>
);

export default Routes;
