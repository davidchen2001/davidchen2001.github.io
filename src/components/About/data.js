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
      I graduated from Carleton University in June 2024, with a major in
      Computer Science.
    </Typography>

    <br />
    <Typography>
      Just before graduation I was living in Tokyo, studying abroad at Aoyama
      Gakuin University (青山学院大学).
    </Typography>

    <br />
    <Typography>
      In my free time, you can find me
      <div>
        <ul>
          <li className="data-items">learning Japanese (まだ大変だ 😅) </li>

          <li className="data-items">cooking 🍳</li>

          <li className="data-items">practicing Nippon Kempo 🥊</li>

          <li className="data-items">traveling 🗺️ </li>

          <li className="data-items">
            sometimes <Link href={links.blog}>writing</Link> 📓
          </li>
        </ul>
      </div>
    </Typography>

    <br />
    <Typography variant="body1">
      I'm always happy to chat and meet new people! I'm also always looking for
      people to practice Japanese or Mandarin with.
    </Typography>
    <br />
  </ThemeProvider>
);
