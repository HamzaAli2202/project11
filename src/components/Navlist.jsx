import React from "react";
import { Grid } from "@mui/material";
import { NavItem } from "./NavItem";

export const Navlist = () => {
  return (
    <Grid conatainer spacing={2}>
      <Grid item xs={3}>
        <NavItem path="/" label="Greet" />
      </Grid>
    </Grid>
  );
};
