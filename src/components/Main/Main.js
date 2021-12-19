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
import { introduction } from "../AboutMe/data";
import portrait from "../../assets/image.jpg";

import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";

export default function Main() {
  return (
    <div className="main-container">
      <Grid container justify="center" spacing={30}>
        <Grid item spacing={2} xs = {6}>
            <Avatar
              src={portrait}
              style={{ width: "50vh", height: "50vh", borderRadius: "50%"}}
            />
        </Grid> 

        <Grid item xs = {6}>
          <AboutMe />
        </Grid>
      </Grid>
    </div>
  );
}
