import React from "react";

import {
  Avatar,
  Grid,
} from "@mui/material";
import portrait from "../../assets/image.jpg";

import "./Main.css";
import About from "../About/About";

export default function Main() {
  return (
    <div className="main-container">
      <Grid container justifyContent="center" alignItems="center">
        <Grid item container xs = {12} sm = {12} md = {12} lg = {6} className = "avatar-container">
            <Avatar
              src={portrait}
              style={{ width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}}
            />
        </Grid> 

        <Grid item xs = {6} sm = {8} md = {10} lg = {9} className = "about-position">
          <About />
        </Grid>
      </Grid>
    </div>
  );
}
