import { findBlogById } from "./findblogbyid.js";
import { blogImage } from "../component/divimage.js";
import { blogContent } from "../component/divContent.js";
import { blogRelatedLinks } from "../component/divrealted.js";

export const renderNewBlog = (blogid) => {
  const blogObject = findBlogById(blogid);
  const rootDiv = document.getElementById("root");
  const asideDiv = document.getElementById("root1");
  blogObject.then((blog) => {
    // console.log(blog);
    rootDiv.innerHTML = "";
    rootDiv.appendChild(blogImage(blog[0].imageUrl));
    rootDiv.appendChild(blogContent(blog[0].title, blog[0].content));
    asideDiv.innerHTML = "";
    asideDiv.appendChild(blogRelatedLinks(blog[0].links));
  });
};
