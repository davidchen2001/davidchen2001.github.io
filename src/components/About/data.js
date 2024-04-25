import React from "react";
import { Typography, ThemeProvider, Link } from "@mui/material";
import { fontFamily } from "../Themes/Themes";

import "./About.css";

export const links = {
  email: "davidcchen01@gmail.com",
  github: "https://github.com/davidchen2001",
  linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
  blog: "blog",
  resume:
    "https://drive.google.com/file/d/1XcIF0C2AD_MTHxjqdn6rhj1ah70mWe8i/view?usp=sharing",
  ciena: "https://www.ciena.com/",
  blueprint: "https://cublueprint.org/",
  beneficent: "https://beneficent.cc/",
  ross_video: "https://www.rossvideo.com/",
  inception:
    "https://www.rossvideo.com/products-services/management-systems/newsroom-computer-systems/inception-news/",
};

export const introduction = (
  <ThemeProvider theme={fontFamily}>
    <div className="data-title">
      <Typography variant="h4">Hey! I'm David.</Typography>
    </div>

    <br />
    <Typography variant="body1">
      I'm in my 4th Year studying Computer Science at Carleton University.
      Previously, I was a SWE Intern at MongoDB and AWS.
    </Typography>

    <br />
    <Typography>
      I've been living in Tokyo since September 2023. Currently I'm on exchange
      at Aoyama Gakuin University (青山学院大学).
    </Typography>

    <br />
    <Typography>
      In my free time, you can find me
      <div>
        <ul>
          <li className="data-items">learning Japanese (まだ大変です 😅) </li>

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
      I'm always down to chat so please don't hesitate to reach out!
    </Typography>
    <br />
  </ThemeProvider>
);
