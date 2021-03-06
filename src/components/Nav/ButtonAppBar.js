import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/loginActions";
import { Link } from "react-router-dom";
import Cookie from "universal-cookie";
import "./ButtonAppBar.css"

const useStyles = makeStyles((theme) => ({
  root: {
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const cookies = new Cookie();
  const dispatch = useDispatch();

  let loggedIn = false;
  if (
    cookies.get("isLoggedIn") === "false" ||
    cookies.get("isLoggedIn") === undefined
  ) {
    loggedIn = false;
  } else {
    loggedIn = true;
  }

  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout());
    cookies.set("email", "", {
      path: "/",
      expires: new Date(2021, 12),
    });
    cookies.set("isLoggedIn", "false", {
      path: "/",
      expires: new Date(2021, 12),
    });
    window.location = "/signin";
  };

  const loginHandler = () => {
    window.location = "/signin";
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className="mainlink" to="/">
              {cookies.get("isLoggedIn") === "false" ||
                cookies.get("isLoggedIn") === undefined
                ? "Mood Log"
                : cookies.get("email")}
            </Link>
          </Typography>
          {loggedIn ? (
            <Button style={{ color: "white" }} color="inherit" onClick={logoutHandler}>
              Log Out
            </Button>
          ) : (
              <Button style={{ color: "white" }} color="inherit" onClick={loginHandler}>
                Log In
              </Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
