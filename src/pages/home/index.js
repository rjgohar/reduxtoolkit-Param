import { useState } from "react";
import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Addfav } from "../../feature/favslicer";

import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";
import { setInput, searchByRegion } from "../../feature/countryslicer.js";
import { useNavigate } from "react-router-dom";
import { getdata } from "../../feature/action";

export default function Home() {
  const initialValue = () => {
    const value = "";
    return value;
  };
  const [value, setValue] = useState(initialValue);

  const classes = useStyles();
  useEffect(() => {
    dispatch(getdata());
  }, []);

  const Navigate = useNavigate();
  const {
    country: { countryLoading, filteredData },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(Addfav(item));
  };

  const handleCountyNames = (item) => {
    Navigate(`/${item}`);
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.innerSecond}>
        <Box>
          <TextField
            className={classes.textField}
            id="standard-basic"
            placeholder=" Search   country "
            variant="outlined"
            size="small"
            onChange={(e) => {
              if (e.target.value === "") {
                dispatch(getdata());
              } else {
                dispatch(setInput(e.target.value));
              }
            }}
          />
        </Box>
        <Box>
          <Box className={classes.optionsection}>
            <select
              className={classes.regionSelector}
              id="filterByRegion"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onClick={() => {
                dispatch(searchByRegion(value));
              }}
            >
              <option value="">filter by region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </Box>
        </Box>
      </Box>
      <Box className={classes.gridSection}>
        {countryLoading ? (
          <CircularProgress />
        ) : (
          filteredData.slice(0, 20).map((item, index) => {
            return (
              <Box key={index}>
                <Box className={classes.cardMain}>
                  <Box>
                    <Box onClick={() => handleCountyNames(item.name)}>
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
                    <Box className={classes.btnSection}>
                      <Button>
                        <FavoriteIcon
                          className={classes.btnfav}
                          onClick={() => {
                            handleClick(item);
                          }}
                        />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })
        )}
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  countData: {
    paddingTop: 5,
    display: "flex",
    gap: 10,
  },
  dataSection: {
    paddingTop: 30,
    paddingLeft: 30,
  },
  optionsection: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
    },
  },
  innerSecond: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: " 60px 90px 0px 90px",
  },
  textField: {
    width: 300,
    color: "black",

    " & .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "black",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
  },
  regionSelector: {
    width: 150,
    height: 30,
    borderRadius: 4,
  },
  btnsearch: {
    width: 150,
    height: 30,
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
  btnSection: {
    paddingLeft: 30,

    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  btnfav: {
    color: "#343434",
    "& .hover": {
      cursor: "pointer",
      background: "#e0115f",
    },
  },
}));
