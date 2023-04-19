import React from "react";
import { Grid } from "@material-ui/core";
//import AddIcon from "@material-ui/icons/Add";

import { Link } from "react-router-dom";
import Students from "./Students";
const StudentList = () => {
  //const classes = useStyles();
  return (
    <>
      <Grid spacing={2} container>
        {new Array(9).fill("").map((item) => (
          <Students  />
        ))}
      </Grid>
     
    </>
  );
};

export default StudentList;