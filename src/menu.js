function MenuItem(name, src) {
  this.name = name;
  this.src = src;
}

const menu = [
  new MenuItem("Simple Cheese Dog", "./images/cheese-dog.jpeg"),
  new MenuItem("Bacon Cheese Dog", "./images/bacon-dog.jpeg"),
  new MenuItem("Chilli Cheese Dog", "./images/chilli-dog.jpeg"),
  new MenuItem("Onion Cheese Dog", "./images/onion-dog.jpeg"),
];

const createMenu = () => {
  const container = document.querySelector("#content-container");
  container.innerHTML = "";
  container.append(createTitle());
  container.append(createMenuBackground());
};

const createTitle = () => {
  const title = document.createElement("h3");
  title.classList.add("title-header");
  title.innerText = "Menu";
  return title;
};

const createMenuBackground = () => {
  const background = document.createElement("div");
  background.classList.add("menu-background");
  menu.forEach((item) => {
    background.append(createMenuItem(item));
  });
  return background;
};

const createMenuItem = ({ name, src }) => {
  const container = document.createElement("div");
  container.classList.add("menu-item");

  const img = document.createElement("img");
  img.src = src;
  container.append(img);

  const p = document.createElement("p");
  p.innerText = name;
  container.append(p);

  return container;
};

export { createMenu };
