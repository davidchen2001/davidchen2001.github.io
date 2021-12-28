import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import { Typography, Grid, Divider } from "@mui/material";
import Markdown from "markdown-to-jsx";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "../Themes/Themes.js";
import { GlobalStyles } from "../Themes/globalStyles.js";

import "./BlogPost.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function BlogPost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          publishedAt,
          "categories": categories[]->title,
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => {
        setPostData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <ThemeProvider theme = {lightTheme}>
      <GlobalStyles />
        <div className = "blog-post-container">
          <Grid
          item
          xs = {12}
          md = {8}
          sx = {{
            '& .markdown': {
              py: 3,
            },
          }}
          >
            <Typography variant = "h4" gutterBottom>
              {postData.title}
            </Typography>

              <div className="">
                <div >
                  <div className="">
                    {postData.authorImage ? (
                      <img
                      src={urlFor(postData.authorImage).url()}
                      className="w-10 h-10 rounded-full"
                      alt="Author is Kap"
                      />
                    ): null}
                    <Grid container spacing = {2}>
                      <Grid item>
                        <h4 className="flex items-center">
                          {postData.publishedAt.toString().substring(0,10)}
                        </h4>
                      </Grid>
                      
                      {postData.categories.map(category => 
                        <Grid item>
                          <Typography key = {category} className="flex items-center">
                            {category}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>
                  </div>
                </div>
              </div>
              {postData.mainImage ? (
                <img
                className="w-full object-cover rounded-t"
                src={urlFor(postData.mainImage).url()}
                alt=""
                style={{ height: "400px" }}
                />
              ): null}

            <Divider />

            <div className="py-12 lg:prose-xl">
              <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>

          </Grid>
        </div>
    </ThemeProvider>
  );
}