export const blogHeaderImg = () => {
  const div = document.createElement("div");
  div.classList.add("logo-image");
  const img = document.createElement("img");
  // img.src = "../../img/logo header.svg";
  img.src =
    "https://raw.githubusercontent.com/umeshmore45/Blog-Object/48091915bca60f3ec048af96c9062b9db1b93fc1/img/logo%20header.svg";
  img.alt = "logo";
  div.appendChild(img);
  return div;
};
