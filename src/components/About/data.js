import React from 'react';
import {Typography, ThemeProvider} from "@mui/material";
import {fontFamily} from "../Themes/Themes";

export const introduction = (
    <ThemeProvider theme = {fontFamily}>
        <Typography variant = "h4">
        Hey! I'm David.
        </Typography>
        <br/>
        <Typography variant = "body1">
        I'm currently working as an Embedded Software Engineering Intern at Ciena.
        
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
    github: "https://github.com/Dioceus",
    linkedin: "https://www.linkedin.com/in/david-chuwei-chen/",
    blog: "blog",
    resume: "https://drive.google.com/file/d/15kz2UkNOqwTiEdlYQ0O9cvLifn0kZjhi/view?usp=sharing"
}