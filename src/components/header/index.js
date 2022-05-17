import React from "react";
import { Box, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import Brightness3Icon from "@material-ui/icons/Brightness3";

import { makeStyles } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headContainer}>
      <Box className={classes.headerconatiner}>
        <NavLink to="/">
          <Typography variant="h4">Where in the World?</Typography>
        </NavLink>
        <Box
          className={classes.HamburgerClosed}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            <Typography variant="h6" className={classes.typo} color="inherit">
              <b> Home</b>
            </Typography>
          </NavLink>
          <NavLink
            to="/Favorites"
            activeClassName="active"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> Favorite</b>
            </Typography>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? classes.active : classes.notactive
            }
          >
            <Typography className={classes.typo} variant="h6" color="inherit">
              <b> Contact</b>
            </Typography>
          </NavLink>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className={classes.authnavabar}
        ></Box>
        <Box className={classes.boxIcon}>
          <Box>
            <Brightness3Icon className={classes.icon} />
          </Box>
          <Box className={classes.boxtext}>
            <Typography>Dark mode</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  HamburgerClosed: {
    display: "flex",
    listStyle: "none",
    gap: "22px",
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  boxtext: {
    paddingTop: 6,
  },
  active: {
    position: "relative",
    "&::after": {
      position: "absolute",
      content: "''",
      width: 21,
      height: 3,
      backgroundColor: "#005084",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },

  icon: {
    transform: "rotate(140deg)",
    margin: 5,
  },
  headerconatiner: {
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
  },
  headContainer: {
    zIndex: "10000000",
    position: "relative",
    height: "60px",
    marginTop: 0,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: theme.palette.text.secondary,
    background: theme.palette.background.main,
    boxShadow: "0px 1px 17px rgba(0, 0, 0, 0.2)",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  },
  authnavabar: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  typo: {
    color: theme.palette.text.secondary,
    textTransform: "capitalize",
    paddingBottom: 5,
  },
  boxIcon: {
    display: "flex",
    paddingRight: 30,
  },
}));
