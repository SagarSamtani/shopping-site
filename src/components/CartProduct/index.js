import PropTypes from "prop-types";
import React, { memo } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import cartProductStyles from "styles/cartProduct";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  addToCart,
  decreaseQuantity,
  removeCartItem
} from "actions/cart/cartActions";

const useStyles = makeStyles(theme => cartProductStyles(theme));

const CartProduct = props => {
  const {
      productInfo,
      addToCart,
      decreaseQuantity,
      removeCartItem,
      cartItems
    } = props,
    { name, image, price, currency, quantity } = productInfo;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={require(`assets/images/${image}`)}
        alt={image}
        title={image}
      />

      <CardActions className={classes.actionItems}>
        <span className={classes.price}>
          {currency}
          {price}
        </span>
        <div className={classes.qtyContainer}>
          <span>Qty</span>
          <ButtonGroup className={classes.buttonGroup}>
            <Button
              onClick={() => {
                addToCart(productInfo);
              }}>
              +
            </Button>
            <span>{quantity}</span>
            <Button
              disabled={quantity < 2}
              onClick={() => {
                decreaseQuantity(productInfo);
              }}>
              -
            </Button>
          </ButtonGroup>
        </div>
      </CardActions>
      <div>
        <span className={classes.productName}>{name}</span>
        <div className={classes.totalContainer}>
          <span className={classes.leftSpacing}>Total</span>
          <span className={classes.leftSpacing}>{quantity * price}</span>
        </div>
      </div>
      <Button
        onClick={() => {
          removeCartItem(productInfo);
        }}
        variant="outlined"
        className={classes.addBtn}>
        Remove
      </Button>
    </Card>
  );
};

CartProduct.propTypes = {
  cartItems: PropTypes.array,
  removeCartItem: PropTypes.func,
  decreaseQuantity: PropTypes.func
};

const mapStateToProps = ({ cartReducer }) => {
  const { cartItems } = cartReducer;

  return {
    cartItems
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: cartProduct => dispatch(addToCart(cartProduct)),
  decreaseQuantity: cartProduct => dispatch(decreaseQuantity(cartProduct)),
  removeCartItem: cartProduct => dispatch(removeCartItem(cartProduct))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(CartProduct));
