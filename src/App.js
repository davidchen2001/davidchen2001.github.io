import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.js";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Themes/globalStyles.js";
import { darkTheme } from "./components/Themes/Themes.js";

import "./App.css";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route exact path="/blog" element={<AllPosts />} />
            <Route path="/blog/:slug"  element={<OnePost />} />
          </Routes>
        </BrowserRouter>
   </ThemeProvider>
  );
}
export default App;