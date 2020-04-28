const style = theme => ({
  modal: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,

    boxShadow: theme.shadows[5]
    // padding: theme.spacing(2, 4, 3)
  },

  container: {
    padding: theme.spacing(2, 4, 3)
  },
  header: {
    backgroundColor: "#3f51b5",
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between"
  },
  title: {
    fontWeight: 600,
    fontSize: 20,
    color: "white"
  },
  icon: {
    cursor: "pointer"
  }
});

export default style;
