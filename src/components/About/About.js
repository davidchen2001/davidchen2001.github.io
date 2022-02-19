import React from "react";

import {
  Grid,
  Typography,
  ThemeProvider
} from "@mui/material";
import { fontFamily } from "../Themes/Themes";
import { introduction } from "./data";
import PersonalLinks from "../PersonalLinks/PersonalLinks";

import "./About.css";

export default function About() {
  return (
    <ThemeProvider theme = {fontFamily}>
        <Grid justify="center" alignItems="center" >
          <Grid item>
            <Typography>{introduction}</Typography>
          </Grid>
          <PersonalLinks fontSize = "large" />
        </Grid>
    </ThemeProvider>
  );
}
