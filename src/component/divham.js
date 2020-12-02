import { toggleHamburger } from "../helper/toggleHamburger.js";

export const hamContainer = () => {
  const div = document.createElement("div");
  div.classList.add("ham-contaner");
  const button = document.createElement("button");
  button.classList.add("ham");
  const nav = document.createElement("nav");
  nav.classList.add("navbar");
  button.addEventListener("click", () => {
    toggleHamburger(nav, button);
  });
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.classList.add("menuLink");
  a.href = "#";
  a.innerHTML = "Home";
  const li1 = document.createElement("li");
  const a1 = document.createElement("a");
  a1.classList.add("menuLink");
  a1.href = "#";
  a1.innerHTML = "About";
  const li2 = document.createElement("li");
  const a2 = document.createElement("a");
  a2.classList.add("menuLink");
  a2.href = "#";
  a2.innerHTML = "Contact";
  div.appendChild(button);
  div.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(a);
  ul.appendChild(li1);
  li1.appendChild(a1);
  ul.appendChild(li2);
  li2.appendChild(a2);
  return div;
};
