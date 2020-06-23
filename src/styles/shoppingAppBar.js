export default theme => {
    return {
      title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
          display: "block"
        },
        color: "rgba(0, 0, 0, 0.87)"
      },
      image: {
        height: "30px"
      },
      appBar: {
        backgroundColor: "#4a8ac8"
      }
    };
  };