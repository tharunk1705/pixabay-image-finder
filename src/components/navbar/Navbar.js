import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import PIXABAYLOGO from "../../pixabayLogo.png";

const useStyles = makeStyles({
  appBar: {
    alignItems: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <img
          src={PIXABAYLOGO}
          alt="pixabay logo"
          style={{
            width: "50px",
            borderRadius: "10px",
            marginRight: "1rem",
          }}
        />
        <Typography variant="h4" align="center"> Pixabay Image Finder</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
