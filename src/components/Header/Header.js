import { Grid, Link, IconButton } from "@mui/material";
import React from "react";
import PersonalLinks from "../PersonalLinks/PersonalLinks";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Header(props) {

    const { backLink } = props;

    return (
        <div className = "flex justify-center">
            <Grid container spacing = {2}>
                <Grid item>
                    <Link href={backLink}>
                    <IconButton>
                        <ArrowBackIcon fontSize="medium"/>
                    </IconButton>
                    </Link>
                </Grid>

                <Grid item>
                    <PersonalLinks />
                </Grid>
                
            </Grid>
            
        </div>
    )
}