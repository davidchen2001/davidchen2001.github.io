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
      <div className="about-me">
        <Grid justify="center" alignItems="center" >
          <Grid item spacing = {2}>
            <Typography>{introduction}</Typography>
          </Grid>

          <Grid container spacing = {3}> 
            <Grid item>
              <Link
              to = "#" 
              href = {links.blog}>
                <Button variant="outlined" size="medium" >
                  Blog  
                </Button>
              </Link>
            </Grid>

            <Grid item>
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
      </div>

    </ThemeProvider>
  );
}
