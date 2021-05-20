import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    minHeight: "100vh",
  },
  indicator: {
    color: "#EEC46B",
  },
}));

function CenterLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CircularProgress /> */}
      <Grid container alignItems={"center"} justify={"center"}>
        <CircularProgress className={classes.indicator} />
      </Grid>
    </div>
  );
}

export default CenterLoader;
