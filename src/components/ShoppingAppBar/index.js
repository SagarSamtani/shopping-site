import PropTypes from "prop-types";
import React, { memo } from "react";
import { connect } from "react-redux";
import Link from "@material-ui/core/Link";
import Badge from "@material-ui/core/Badge";
import { getQuantities } from "utils/helper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import appBarStyles from "styles/shoppingAppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => appBarStyles(theme));

const ShoppingAppBar = props => {
  const { cartItems } = props,
    classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.title} href="/dashboard">
            AegonLife Shopping
          </Link>
        </Typography>

        <Link href="/cart">
          <Badge badgeContent={getQuantities(cartItems)} color="secondary">
            <img
              alt="shoppingCartImg"
              className={classes.image}
              src={require("assets/images/shoppingCart.png")}
            />
          </Badge>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

ShoppingAppBar.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = ({ cartReducer }) => {
  const { cartItems } = cartReducer;

  return {
    cartItems
  };
};

export default connect(mapStateToProps)(memo(ShoppingAppBar));
