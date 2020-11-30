import { renderNewBlog } from "../helper/renderNewblog.js";

export const blogRelatedLinks = (links) => {
  const ul = document.createElement("ul");
  ul.classList.add("blog-ul");
  links.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.title;
    li.id = element.id;
    li.addEventListener("click", () => {
      renderNewBlog(element.id);
    });

    ul.appendChild(li);
  });
  return ul;
};
