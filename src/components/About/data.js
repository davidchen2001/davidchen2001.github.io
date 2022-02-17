import React from 'react';
import {Typography, ThemeProvider, Link} from "@mui/material";
import {fontFamily} from "../Themes/Themes";

export const links = {
    email: "chuwei.chen2001@gmail.com",
    github: "https://github.com/davidchen2001",
    linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
    blog: "blog",
    resume: "https://drive.google.com/file/d/1EE0t1Sc8NbWdrhgsoDM95zlnCxjygT_l/view?usp=sharing",
    ciena: "https://www.ciena.com/",
    blueprint: "https://cublueprint.org/",
    beneficent: "https://beneficent.cc/",
    ross_video: "https://www.rossvideo.com/",
    inception: "https://www.rossvideo.com/products-services/management-systems/newsroom-computer-systems/inception-news/",
}

export const introduction = (
    <ThemeProvider theme = {fontFamily}>
        <Typography variant = "h4">
        Hey! I'm David.
        </Typography>
        <br/>
        <Typography variant = "body1">
        I'm an Embedded Software Engineering Intern at <Link href = {links.ciena}>Ciena</Link>. 
        I'm also a front-end developer @ <Link href = {links.blueprint}> CU Blueprint</Link> building a CRM platform for <Link href = {links.beneficent}>Beneficent</Link>.
        </Typography>
         
        <br/>
        <Typography>
        Currently seeking Summer 2023 SWE or PM internship opportunities. Here is my <Link href = {links.resume}>résumé</Link>. I want to work on cool projects 🚀. 
        </Typography>
        
        <br/>
        <Typography>
            When I'm not working, you can find me 
            <li>
                <Link href = "https://setfoundation.ca/">event planning</Link>
            </li>

            <li>
                cooking 🍳
            </li>

            <li>
                watching anime 📺
            </li>

            <li>
                bouldering 🧗
            </li>
        </Typography>

        <br/>
        <Typography variant = "body1">
        I'm always down to chat! Please don't hesitate to reach out. 
        </Typography>
        <br/>
    </ThemeProvider>
);