import React from "react";

import {
  Grid,
  Link,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { grey } from '@mui/material/colors';
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { introduction, links } from "./data";

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

        <Grid container spacing={2}>
          <Grid item>
              <Link to = "#" 
              onClick={(e) => {
                  window.location = `mailto: ${links.email}`;
                  e.preventDefault();
              }}
              >
                <IconButton>
                  <EmailIcon fontSize="large" sx = {{color: grey[50]}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item>
              <Link href = {links.github}>
                <IconButton>
                  <GitHubIcon fontSize="large" sx = {{color: grey[50]}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item>
              <Link href = {links.linkedin}>
                <IconButton>
                  <LinkedInIcon fontSize="large" sx = {{color: grey[50]}}/>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
      </Grid>
    </div>
  );
}
