import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../../feature/action";
import { Removefav } from "../../feature/favslicer";
function Favourite() {
  const classes = useStyles();
  const {
    favitem: { fav },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <Box className={classes.main}>
        {fav.map((item, index) => {
          console.log(item);
          return (
            <>
              <Box key={index}>
                <Box className={classes.cardMain}>
                  <Box>
                    <Box>
                      <img
                        className={classes.image}
                        src={item.flags.png}
                        alt="img"
                      />
                    </Box>
                  </Box>
                  <Box className={classes.dataSection}>
                    <Box>
                      <Typography> {item.name}</Typography>
                    </Box>
                    <Box className={classes.countData}>
                      <Typography>Population:</Typography>
                      <Typography>{item.population}</Typography>
                    </Box>
                    <Box className={classes.countData}>
                      <Typography>Region:</Typography>
                      <Typography>{item.region}</Typography>
                    </Box>
                    <Box className={classes.countData}>
                      <Typography>Capital:</Typography>
                      <Typography>{item.capital}</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => {
                        dispatch(Removefav(item.name));
                      }}
                      className={classes.cardRemove}
                    >
                      remove
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </div>
  );
}
export default Favourite;
const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",

    gap: 60,
    flexWrap: "wrap",
    padding: " 60px 90px 30px 90px",
  },
  countData: {
    paddingTop: 5,
    display: "flex",
    gap: 10,
  },
  dataSection: {
    paddingTop: 30,
    paddingLeft: 30,
  },

  textField: {
    width: 300,
    color: "black",

    " & .MuiInputBase-input": {
      color: "black",
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },

  cardRemove: {
    width: 100,
    height: 10,
    border: "1px solid black",
    borderRadius: 5,
    color: "black",
  },
  btnsearch: {
    width: 100,
    height: 50,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#6eb6f0",

    "& :hover": {
      color: "#FFC130",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 30,
      marginLeft: 20,
    },
  },
  gridSection: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 60,
    gap: 50,
  },
  cardMain: {
    width: 250,
    borderRadius: 5,
    height: 360,

    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  image: {
    width: 250,
    height: 200,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
}));
