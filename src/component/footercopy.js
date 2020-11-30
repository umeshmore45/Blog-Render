export const blogFooterCopy = () => {
  const p = document.createElement("p");
  p.classList.add("copyrights");
  p.innerHTML = "Copyright © 2020. All Rights Reserved.";
  return p;
};
