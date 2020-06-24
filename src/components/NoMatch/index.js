import React from "react";
import Link from "@material-ui/core/Link";
import { useLocation } from "react-router-dom";

export default () => {
  let location = useLocation();

  return (
    <div>
      <h3>No match for {location.pathname}</h3>
      <Link href="/">Back to Dashboard</Link>
    </div>
  );
};
