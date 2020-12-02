import { data } from "../src/data.js";
import { blogImage } from "./component/divimage.js";
import { blogContent } from "./component/divContent.js";
import { blogRelatedLinks } from "./component/divrealted.js";
import { findBlogById } from "./helper/findblogbyid.js";
import { blogHeaderImg } from "./component/headerimg.js";
import { toggleDark } from "./helper/toggledark.js";
import { blogHeaderLinks } from "./component/headerlinks.js";
import { hamContainer } from "./component/divham.js";
import { blogFooterIcon } from "./component/footericon.js";
import { blogFooterCopy } from "./component/footercopy.js";

const divroot = document.getElementById("root");
const divroot1 = document.getElementById("root1");

data.then((blog) => {
  divroot.appendChild(blogImage(blog[0].imageUrl));
  divroot.appendChild(blogContent(blog[0].title, blog[0].content));
  divroot1.appendChild(blogRelatedLinks(blog[0].links));
});
const blogHeaderdiv = document.getElementById("header-container");
blogHeaderdiv.appendChild(blogHeaderImg());
blogHeaderdiv.appendChild(toggleDark());
blogHeaderdiv.appendChild(blogHeaderLinks());
blogHeaderdiv.appendChild(hamContainer());

const blogFooterdiv = document.getElementById("footer-container");
blogFooterdiv.appendChild(blogFooterIcon());
blogFooterdiv.appendChild(blogFooterCopy());
