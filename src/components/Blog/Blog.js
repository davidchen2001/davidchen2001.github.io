import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import sanityClient from "../../client.js";
import { fontFamily } from "../Themes/Themes.js";
import Header from "../Header/Header.js";

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
    <ThemeProvider theme = {fontFamily}>
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center ">Blog</h2>
        <h3 className="text-lg text-gray-600 flex justify-center ">
          I write about anything I find interesting.
        </h3>
        <div className="header-container">
          <Header backLink = {"/"}/>
        </div>
        
        <br />

        <div className="link-container">

          <Grid>
            {allPostsData &&
              allPostsData.reverse().map((post, index) => ( 
                <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                  <span
                    key={index}
                  >
                      <Grid item spacing = {5} className = "blog-post-container">
                        <Grid container spacing = {5} justifyContent="space-between">
                          <Grid item>
                            <Typography variant = "h4">
                              {post.title}
                            </Typography>
                          </Grid>

                          <Grid item  className = "blog-post-date-text">
                            <Typography variant = "h4">
                              {post.publishedAt.toString().substring(0,10)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid> 
                    <br />
                  </span>
                </Link>
              ))}
          </Grid>
        </div>
      </div>
    
    </ThemeProvider>
  );
}