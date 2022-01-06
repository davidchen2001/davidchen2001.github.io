import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.js";
import Blog from "./components/Blog/Blog.js";
import BlogPost from "./components/BlogPost/BlogPost.js";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Themes/globalStyles.js";
import { lightTheme, darkTheme } from "./components/Themes/Themes.js";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug"  element={<BlogPost />} />
          </Routes>
        </BrowserRouter>
   </ThemeProvider>
  );
}
export default App;