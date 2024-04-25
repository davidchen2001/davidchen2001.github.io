import React from "react";
import { Typography, ThemeProvider, Link } from "@mui/material";
import { fontFamily } from "../Themes/Themes";

import "./About.css";

export const links = {
  email: "davidcchen01@gmail.com",
  github: "https://github.com/davidchen2001",
  linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
  blog: "blog",
};

export const introduction = (
  <ThemeProvider theme={fontFamily}>
    <div className="data-title">
      <Typography variant="h4">Hey! I'm David.</Typography>
    </div>

    <br />
    <Typography variant="body1">
      I'm a 4th year student at Carleton University, majoring in Computer
      Science. I'll be graduating in June 2024.
    </Typography>

    <br />
    <Typography>
      I've been living in Tokyo since September 2023. Currently, I'm studying
      abroad at Aoyama Gakuin University (青山学院大学).
    </Typography>

    <br />
    <Typography>
      In my free time, you can find me
      <div>
        <ul>
          <li className="data-items">learning Japanese (まだ大変だ 😅) </li>

          <li className="data-items">exploring Japan 🗾 </li>

          <li className="data-items">watching Marvel or Disney 📺</li>

          <li className="data-items">practicing Nippon Kempo 🥊</li>

          <li className="data-items">
            sometimes <Link href={links.blog}>blogging</Link> 📓
          </li>
        </ul>
      </div>
    </Typography>

    <br />
    <Typography variant="body1">
      I'm always happy to chat and meet new people!
    </Typography>
    <br />
  </ThemeProvider>
);
