import React from "react";
import "./blogsNews.css";
import LetsFind from "../LetsFind/LetsFind";
import Blogs from "../Blogs/Blogs";

function BlogsNews({ isFind = true }) {
  return (
    <>
      {isFind ? <LetsFind /> : null}
      <Blogs />
    </>
  );
}

export default BlogsNews;
