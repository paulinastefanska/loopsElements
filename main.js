let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  btn.textContent = "Add 10 elements";
  btn.style.fontSize = "20px";
  btn.style.marginRight = "20px";
  document.body.appendChild(btn);

  const btnReset = document.createElement("button");
  btnReset.textContent = "Reset";
  btnReset.style.fontSize = "20px";
  document.body.appendChild(btnReset);

  const list = document.createElement("ul");
  list.style.listStyle = "none";
  document.body.appendChild(list);
  
  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", resetLiElements);
}

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Element no ${orderElement++}`;
    li.style.fontSize = `${size++}px`;
    document.querySelector("ul").appendChild(li);
  }
}

const resetLiElements = () => {
  document.querySelector("ul").textContent= "";
  size = 10;
  orderElement = 1;
}

init()
