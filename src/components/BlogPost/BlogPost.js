import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import { ThemeProvider } from "styled-components";
import { lightTheme } from "../Themes/Themes.js";
import { GlobalStyles } from "../Themes/globalStyles.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {
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
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <ThemeProvider theme = {lightTheme}>
      <GlobalStyles />
        <div>
          <div className="">
            <div className="">
              <div className="">
                {/* Title Section */}
                <div >
                  <h2>
                    {postData.title}
                  </h2>
                  <div className="">
                    {postData.authorImage ? (
                      <img
                      src={urlFor(postData.authorImage).url()}
                      className="w-10 h-10 rounded-full"
                      alt="Author is Kap"
                      />
                    ): null}
                    <h4 className="cursive flex items-center pl-2 text-2xl">
                      {postData.name}
                    </h4>
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
            </div>
            <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
              <BlockContent
                blocks={postData.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
            </div>
          </div>
        </div>
    </ThemeProvider>
  );
}