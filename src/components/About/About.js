import React from "react";

import {
  Grid,
  Link,
  Typography,
  Button,
} from "@mui/material";
import { grey } from '@mui/material/colors';
import { introduction, links } from "./data";
import PersonalLinks from "../PersonalLinks/PersonalLinks";

import "./About.css";

export default function About() {
  return (
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
              <Button variant="outlined" size="medium" sx = {{color: grey[50]}}>
                Blog  
              </Button>
            </Link>
          </Grid>

          <Grid item>
            <Link href = {links.resume}>
              <Button variant="outlined" size="medium" sx = {{color: grey[50]}}>
                Resume
              </Button>
            </Link>
          </Grid>
        </Grid>

        <br />
        <PersonalLinks color = {grey[50]} fontSize = "large" />
      </Grid>
    </div>
  );
}
