import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import sanityClient from "../../client.js";
import { lightTheme } from "../Themes/Themes.js";
import { GlobalStyles } from "../Themes/globalStyles.js";

import "./Blog.css";

export default function Blog() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        publishedAt,
        mainImage{
        asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme = {lightTheme}>
      <GlobalStyles />
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center ">Blog</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog
        </h3>
        <div className="link-container">
          {allPostsData &&
            allPostsData.map((post, index) => ( 
              <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                <span
                  key={index}
                >
                  <Grid container spacing = {5}>
                    <Grid item>
                      <Typography variant = "h4">
                        {post.title}
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography>
                        {post.publishedAt.toString().substring(0,10)}
                      </Typography>
                    </Grid>
                  </Grid>

                  <br />
                </span>
              </Link>
            ))}
        </div>
      </div>
    
    </ThemeProvider>
  );
}