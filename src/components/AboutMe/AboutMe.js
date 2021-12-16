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
                <Grid item xs = {6} spacing = {2} style = {{left: "50%", top: "50%"}}>
                    <Grid item>
                        <Avatar src = {portrait} style = {{ width: "50%", height: "50%", borderRadius: "5%"}}/>
                    </Grid>
                    
                    <Grid container spacing = {4} >
                        <Grid item>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </Grid>
                        
                        <Grid item>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                        
                        <Grid item>
                            <Button variant = "contained" size = "small">
                                Blog
                            </Button>
                        </Grid> 

                        <Grid item>
                            <Button variant = "contained" size = "small">
                                Resume
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs = {6}>
                    
                </Grid>
            </Grid>
        </div>
    );
}