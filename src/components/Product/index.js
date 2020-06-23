import React from "react";
import Card from "@material-ui/core/Card";
import productStyles from "styles/product";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => productStyles(theme));

const Product = props => {
  const { productInfo, onClickHandler } = props,
    { name, image, price, currency, description } = productInfo;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.cardHeader} title={name} />
      <CardMedia
        className={classes.media}
        image={require(`assets/images/${image}`)}
        alt={image}
        title={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionItems}>
        <Typography className={classes.price} component="span">
          {currency}{price}
        </Typography>
        <Button
          onClick={onClickHandler}
          variant="outlined"
          className={classes.addBtn}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
