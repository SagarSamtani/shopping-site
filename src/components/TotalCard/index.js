import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import totalCardStyles from "styles/totalCard";
import { makeStyles } from "@material-ui/core/styles";
import { getTotal } from "utils/helper";

const useStyles = makeStyles(theme => totalCardStyles(theme));

const TotalCard = props => {
  const { cartItems } = props,
    classes = useStyles(),
    itemsTotal = cartItems.map(item => {
      return (
        <div key={item.id} className={classes.listItem}>
          <span className={classes.label}>{item.name}</span>{" "}
          <span className={classes.textMargin}>
            {item.currency}
            {item.price} * {item.quantity}
          </span>
          <span className={classes.textMargin}>
            {" "}
            = {item.price * item.quantity}{" "}
          </span>
        </div>
      );
    });
  itemsTotal.push(
    <div key="total-label" className={classes.listItem}>
      <span className={classes.label}>Total </span>
      <span className={classes.textMargin}>= {getTotal(cartItems)} </span>
    </div>
  );
  return (
    <Card className={classes.totalCard}>
      {itemsTotal}
      <Button disabled variant="outlined" className={classes.addBtn}>
        Proceed to payment
      </Button>
    </Card>
  );
};

export default TotalCard;
