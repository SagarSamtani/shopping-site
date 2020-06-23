import PropTypes from "prop-types";
import React, { memo } from "react";
import cartStyles from "styles/cart";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CartProduct from "components/CartProduct";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TotalCard from "components/TotalCard";

const useStyles = makeStyles(theme => cartStyles(theme));

const Cart = props => {
  const { cartItems } = props,
    classes = useStyles();
  const addedCartItems = cartItems.map(eachProduct => {
    return <CartProduct key={eachProduct.id} productInfo={eachProduct} />;
  });

  return addedCartItems.length ? (
    <div className={classes.container}>
      <Grid className={classes.itemsContainer}>{addedCartItems}</Grid>
      <div className={classes.cartRightContainer}>
        <TotalCard cartItems={cartItems} />
      </div>
    </div>
  ) : (
    <Typography variant="h1" component="h2" gutterBottom>
      No Items in Cart
    </Typography>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array
};

const mapStateToProps = ({ cartReducer }) => {
  const { cartItems } = cartReducer;

  return {
    cartItems
  };
};

export default connect(mapStateToProps)(memo(Cart));
