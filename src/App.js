import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.js";
import AllPosts from "./components/AllPosts/AllPosts.js";
import OnePost from "./components/OnePost/OnePost.js";

function App() {
  return (
    <div className = "App">
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path="/posts" element={<AllPosts />} />
          <Route path="/posts/:slug"  element={<OnePost />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}
export default App;