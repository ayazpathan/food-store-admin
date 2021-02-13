import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ className, menuClass, handleDrawerOpen }) => {
  const [isLogOut, setIsLogOut] = useState(false);
  const classes = useStyles();
  let history = useHistory();

  const redirectToSignIn = () => {
    history.push("/");
  };

  const logOutHandler = () => {
    setIsLogOut(true);
    setTimeout(redirectToSignIn, 3000);
  };

  return (
    <div>
      <AppBar position="fixed" className={className}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            ONLINE FOOD STORE
          </Typography>
          <Button
            color="inherit"
            onClick={logOutHandler}
            disabled={isLogOut === true ? "disabled" : null}
          >
            {isLogOut === true ? "Please wait logging out..." : " Log Out"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
