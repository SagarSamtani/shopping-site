import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Cart = lazy(() => import("components/Cart"));
const Dashboard = lazy(() => import("components/Dashboard"));
console.log("process.env.PUBLIC_URL routesjs", process.env.PUBLIC_URL);
const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<div> Loading... </div>}>
      <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
