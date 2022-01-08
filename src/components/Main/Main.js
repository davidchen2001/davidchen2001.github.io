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
      <Grid container justifyContent="center" alignItems="center" spacing = {4}>
        <Grid item xs = {12} sm = {12} md = {12} lg = {6} justifyContent="center" alignItems = "center">
            <Avatar
              src={portrait}
              style={{ width: "40vh", height: "40vh", borderRadius: "50%"}}
            />
        </Grid> 

        <Grid item xs = {6} sm = {12} md = {12} lg = {6} >
          <About />
        </Grid>
      </Grid>
    </div>
  );
}
