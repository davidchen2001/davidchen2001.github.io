import React from 'react';
import {Typography, ThemeProvider, Link} from "@mui/material";
import {fontFamily} from "../Themes/Themes";

export const introduction = (
    <ThemeProvider theme = {fontFamily}>
        <Typography variant = "h4">
        Hey! I'm David.
        </Typography>
        <br/>
        <Typography variant = "body1">
        I'm currently working as an Embedded Software Engineering Intern at <Link href = "https://www.ciena.com/">Ciena</Link>. 
        Outside of my internship, I'm learning about Databases and Full Stack Engineering. 
        In the future I want to learn about ML and Data Science. 
        </Typography>

        <Typography variant = "body1">
            I'm interested in building cool projects 🔥. 
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
        I'm always down to chat! Please feel free to reach out. 
        </Typography>
        <br/>
    </ThemeProvider>
);

export const links = {
    email: "chuwei.chen2001@gmail.com",
    github: "https://github.com/davidchen2001",
    linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
    blog: "blog",
    resume: "https://drive.google.com/file/d/15kz2UkNOqwTiEdlYQ0O9cvLifn0kZjhi/view?usp=sharing"
}