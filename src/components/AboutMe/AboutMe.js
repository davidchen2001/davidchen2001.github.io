import React from "react";

import {
  Grid,
  Link,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { introduction, links } from "./data";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me">
      <Grid justify="center" alignItems="center" >
        <Grid item>
          <Typography>{introduction}</Typography>
        </Grid>

        <Grid container spacing={2}>
          <Grid item>
            <Link to = "#" 
            onClick={(e) => {
                window.location = `mailto: ${links.email}`;
                e.preventDefault();
            }}
            >
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Link>
          </Grid>

          <Grid item>
            <Link href = {links.github}>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Grid>

          <Grid item>
            <Link href = {links.linkedin}>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Link>
          </Grid>

          <Grid item>
            <Link
            to = "#" 
            href = {links.blog}>
              <Button variant="outlined" size="small">
                Blog
              </Button>
            </Link>
          </Grid>

          <Grid item>
            <Link href = {links.resume}>
              <Button variant="outlined" size="small">
                Resume
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
