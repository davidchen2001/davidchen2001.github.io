import React from 'react';
import { Grid, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FeedIcon from '@mui/icons-material/Feed';

import { links } from "../About/data";

export default function PersonalLinks(props) {

    const { color, fontSize } = props;

    return (
        <Grid container direction = "row" spacing = {4}>
          <Grid item xs = {3} sm = {1} md = {1} lg = {1}>
            <Link href = {links.resume} name = "resume">
              <IconButton name = "resume">
                <FeedIcon fontSize={fontSize} sx = {{color: color}}/>
              </IconButton>
            </Link>
          </Grid>

          <Grid item xs = {3} sm = {1} md = {1} lg = {1} >
              <Link 
               name = "email"
               to = "#" 
               onClick={(e) => {
                  window.location = `mailto: ${links.email}`;
                  e.preventDefault();
               }}
              >
                <IconButton name = "email">
                  <EmailIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item xs = {3} sm = {1} md = {1} lg = {1}>
              <Link href = {links.github} name = "github">
                <IconButton name = "github">
                  <GitHubIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item xs = {3} sm = {1} md = {1} lg = {1}>
              <Link href = {links.linkedin} name = "linkedin">
                <IconButton name = "linkedin">
                  <LinkedInIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
    );
}