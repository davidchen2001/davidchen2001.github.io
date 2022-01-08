import React from "react";

import {
  Grid,
  Link,
  Typography,
  Button,
  ThemeProvider
} from "@mui/material";
import { fontFamily } from "../Themes/Themes";
import { introduction, links } from "./data";
import PersonalLinks from "../PersonalLinks/PersonalLinks";

import "./About.css";

export default function About() {
  return (
    <ThemeProvider theme = {fontFamily}>
        <Grid justify="center" alignItems="center" >
          <Grid item spacing = {2}>
            <Typography>{introduction}</Typography>
          </Grid>

          <Grid container direction = "row" > 
            <Grid item xs = {6} sm = {2} md = {2} lg = {3}>
              <Link
              to = "#" 
              href = {links.blog}>
                <Button variant="outlined" size="medium" >
                  Blog  
                </Button>
              </Link>
            </Grid>

            <Grid item xs = {6} sm = {2} md = {2} lg = {3}>
              <Link href = {links.resume}>
                <Button variant="outlined" size="medium" >
                  Resume
                </Button>
              </Link>
            </Grid>
          </Grid>

          <br />
          <PersonalLinks fontSize = "large" />
        </Grid>
    </ThemeProvider>
  );
}
