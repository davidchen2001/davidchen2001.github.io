import { Grid, Link, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { links } from "../About/data";

export default function PersonalLinks(props) {

    const { color, fontSize } = props;

    return (
        <Grid container spacing={2}>
          <Grid item>
              <Link to = "#" 
              onClick={(e) => {
                  window.location = `mailto: ${links.email}`;
                  e.preventDefault();
              }}
              >
                <IconButton>
                  <EmailIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item>
              <Link href = {links.github}>
                <IconButton>
                  <GitHubIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>

            <Grid item>
              <Link href = {links.linkedin}>
                <IconButton>
                  <LinkedInIcon fontSize={fontSize} sx = {{color: color}}/>
                </IconButton>
              </Link>
            </Grid>
          </Grid>
    );
}