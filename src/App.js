import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/posts" element={<AllPosts />}  />
          <Route path="/posts/:slug"  element={<OnePost />} />
        </Routes>
      </BrowserRouter>
   </div>
  );
}
export default App;