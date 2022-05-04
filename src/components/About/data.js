import React from 'react';
import {Typography, ThemeProvider, Link} from "@mui/material";
import {fontFamily} from "../Themes/Themes";

import "./About.css";

export const links = {
    email: "chuwei.chen2001@gmail.com",
    github: "https://github.com/davidchen2001",
    linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
    blog: "blog",
    resume: "https://drive.google.com/file/d/13rZo98Xzoihb6aK7XPqAzluNGTMv3bud/view?usp=sharing",
    ciena: "https://www.ciena.com/",
    blueprint: "https://cublueprint.org/",
    beneficent: "https://beneficent.cc/",
    ross_video: "https://www.rossvideo.com/",
    inception: "https://www.rossvideo.com/products-services/management-systems/newsroom-computer-systems/inception-news/",
}

export const introduction = (
    <ThemeProvider theme = {fontFamily}>
        <div className = "data-title">
            <Typography variant = "h4">
                Hey! I'm David.
            </Typography>
        </div>
       
        <br/>
        <Typography variant = "body1">
        I'm a 3rd Year Computer Science student at Carleton University. 
        I'm also a SDE Intern at Amazon. 
        </Typography>
         
        <br/>
        <Typography>
        Currently seeking Summer 2023 SWE or PM internship opportunities. Here is my <Link href = {links.resume}>résumé</Link>. I want to work on something cool 🔥. 
        </Typography>
        
        <br/>
        <Typography>
            When I'm not coding, you can find me 
            <div >
                <ul >
                    <li className="data-items">
                        cooking 🍳
                    </li>

                    <li className="data-items">
                        watching anime 📺
                    </li>

                    <li className="data-items">
                        learning anime OPs on piano 🎹
                    </li>

                    <li className="data-items">
                        bouldering 🧗
                    </li>

                    <li className="data-items">
                        sometimes <Link href = {links.blog}>blogging</Link> 📓
                    </li>
                </ul>
            </div>
        </Typography>

        <br/>
        <Typography variant = "body1">
        I'm always down to chat so please don't hesitate to reach out!
        </Typography>
        <br/>
    </ThemeProvider>
);