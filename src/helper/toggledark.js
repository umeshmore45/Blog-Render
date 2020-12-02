export const toggleDark = () => {
  const div = document.createElement("div");
  div.classList.add("Toggle");
  const divLi = document.createElement("div");
  divLi.classList.add("light");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("checkbox");
  input.id = "chk";
  input.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });
  const label = document.createElement("label");
  label.htmlFor = "chk";
  const i1 = document.createElement("i");
  i1.classList.add("fas", "fa-moon");
  const i2 = document.createElement("i");
  i2.classList.add("fas", "fa-sun");
  const divBall = document.createElement("div");
  divBall.classList.add("ball");
  div.appendChild(divLi);
  div.appendChild(input);
  div.appendChild(label);
  label.appendChild(i1);
  label.appendChild(i2);
  label.appendChild(divBall);

  return div;
  //   div.innerHTML = `
  //     <div class="light"></div>
  //       <input type="checkbox" class="checkbox" id="chk" />
  //       <label class="label" for="chk">
  //         <i class="fas fa-moon"></i>
  //         <i class="fas fa-sun"></i>
  //         <div class="ball"></div>
  //       </label>`;
};
