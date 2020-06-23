export default theme => {
  return {
    card: {
      width: "300px",
      margin: "15px"
    },
    media: {
      height: 0,
      paddingTop: "56.25%" // 16:9
    },
    cardHeader: {
      backgroundColor: "#4a8ac8",
      fontSize: "8px"
    },
    price: {
      fontWeight: 900
    },
    addBtn: {
      color: "#4a8ac8",
      margin: "10px"
    },
    actionItems: {
      justifyContent: "space-between",
      padding: "16px"
    },
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    },
    qtyContainer: {
      display: "flex",
      alignItems: "center"
    },
    totalContainer: {
      padding: "12px",
      display: "inline-block",
      marginLeft: "15px"
    },
    productName: {
      padding: "12px"
    },
    leftSpacing: {
      marginLeft: "10px"
    }
  };
};
