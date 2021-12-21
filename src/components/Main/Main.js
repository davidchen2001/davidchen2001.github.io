import React from "react";

import {
  Avatar,
  Grid,
} from "@mui/material";
import portrait from "../../assets/image.jpg";

import "./Main.css";
import AboutMe from "../AboutMe/AboutMe";

export default function Main() {
  return (
    <div className="main-container">
      <Grid container justify="center" spacing={0}>
        <Grid item spacing={2} xs = {6}>
            <Avatar
              src={portrait}
              style={{ width: "40vh", height: "40vh", borderRadius: "50%"}}
            />
        </Grid> 

        <Grid item xs = {6} className = "about-me-container">
          <AboutMe />
        </Grid>
      </Grid>
    </div>
  );
}
