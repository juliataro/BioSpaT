import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const classes = {
  extractData: {
    marginTop: "0px",
  },
  icon: {
    color: "white",
  },
  searchBtn: {
    marginTop: "-3rem",
    marginBottom: "3rem",
  },
};

const GenericBtn = (props) => {
  const { setProcedures } = props;


  return (
    <Button
      style={classes.searchBtn}
      spacing={5}
      onClick={() => {
      }}
      variant="contained"
    >
      Otsi
    </Button>
  );

};

export default GenericBtn;
