import React from "react";

import {
  Avatar,
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { introduction } from "./data";
import portrait from "../../assets/image.jpg";

import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div>
      <Grid container justify="center" spacing={12}>
        <Grid item spacing={2} xs = {6}>
            <Avatar
              src={portrait}
              style={{ width: "50vh", height: "50vh", borderRadius: "50%"}}
            />
        </Grid> 

          <Grid item xs = {6} justify = "center" alignItems = "center">
            <Grid item >
              <Typography>{introduction}</Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item>
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Grid>

              <Grid container spacing = {2}>
                <Grid item>
                    <Button variant="contained" size="small">
                    Blog
                    </Button>
                </Grid>

                <Grid item>
                    <Button variant="contained" size="small">
                    Resume
                    </Button>
                </Grid>
              </Grid>
              
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
