import React from 'react';

import {Avatar, Grid, Button, IconButton} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookIcon from '@mui/icons-material/Book';
import { introduction } from './data';
import portrait from "../../assets/image.jpg"

export default function AboutMe() {
    return (
        <div>
            <Grid container justify = 'center'>
                <Grid container item xs = {6} >
                    <Grid item>
                        <Avatar src = {portrait} style = {{left: "50%", top: "50%", width: "50%", height: "50%", borderRadius: "5%"}}/>
                    </Grid>
                    
                    <Grid container>
                        <IconButton>
                            <EmailIcon />
                        </IconButton>

                        <IconButton>
                            <GitHubIcon />
                        </IconButton>

                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>

                        <Button variant = "contained" size = "small">
                            Blog
                        </Button>

                    </Grid>
                </Grid>
                <Grid item xs = {6}>
                    
                </Grid>
            </Grid>
        </div>
    );
}