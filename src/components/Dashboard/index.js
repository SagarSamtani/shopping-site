import PropTypes from "prop-types";
import { connect } from "react-redux";
import Product from "components/Product";
import Grid from "@material-ui/core/Grid";
import { getProducts } from "services/apis";
import React, { useEffect, memo } from "react";
import dashboardStyles from "styles/dashboard";
import { addToCart } from "actions/cart/cartActions";
import { makeStyles } from "@material-ui/core/styles";
import { setProducts } from "actions/product/productActions";

const useStyles = makeStyles(theme => dashboardStyles(theme));

const Dashboard = props => {
  const { setProducts, products, addToCart } = props;

  const classes = useStyles();

  useEffect(() => {
    const callProducts = async () => {
      try {
        const response = await getProducts(),
          { data: products } = response;
        setProducts(products);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    callProducts();
  }, [setProducts]);

  const productsList = products.map(eachProduct => {
    return (
      <Grid key={`grid-${eachProduct.id}`} item xs={3}>
        <Product
          key={eachProduct.id}
          productInfo={eachProduct}
          onClickHandler={() => {
            addToCart(eachProduct);
          }}
        />
      </Grid>
    );
  });

  return (
    <Grid className={classes.container} container spacing={3}>
      {productsList}
    </Grid>
  );
};

Dashboard.propTypes = {
  addToCart: PropTypes.func,
  products: PropTypes.array,
  cartItems: PropTypes.array,
  setProducts: PropTypes.func
};

const mapStateToProps = ({ productReducer, cartReducer }) => {
  const { products } = productReducer,
    { cartItems } = cartReducer;

  return {
    products,
    cartItems
  };
};

const mapDispatchToProps = dispatch => ({
  setProducts: productsList => dispatch(setProducts(productsList)),
  addToCart: cartProduct => dispatch(addToCart(cartProduct))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Dashboard));
