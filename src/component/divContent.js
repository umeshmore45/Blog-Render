export const blogContent = (title, text) => {
  const divContent = document.createElement("div");
  divContent.classList.add("blog-contain");
  const h1 = document.createElement("h1");
  h1.innerHTML = title;
  h1.classList.add("blog-title");
  const p1 = document.createElement("p");
  p1.innerHTML = text;
  p1.classList.add("blog-text");
  divContent.appendChild(h1);
  divContent.appendChild(p1);

  return divContent;
};
