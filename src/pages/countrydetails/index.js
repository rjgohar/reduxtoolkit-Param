import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router-dom";
import { countryName } from "../../feature/action";
export default function Countrydetails() {
  const param = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(countryName(param.countryName));
  }, []);

  const {
    countryname: { nameLoading, name },
  } = useSelector((state) => state);

  console.log(name, "name api data");

  return (
    <div>
      <Box>
        <Box>
          {nameLoading ? (
            <CircularProgress />
          ) : (
            name.map((item, index) => {
              console.log(item, "sssss");
              return (
                <>
                  {" "}
                  <Box key={index}>
                    <Box>
                      <img src={item.flags.png} alt="dkd" />
                    </Box>
                    <Box>{item.area}</Box>
                  </Box>
                  ;
                </>
              );
            })
          )}
        </Box>
      </Box>
    </div>
  );
}
