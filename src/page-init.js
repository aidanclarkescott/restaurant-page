const content = document.getElementById("content");

const pageLoad = () => {
  content.appendChild(createHeader());
  content.appendChild(createNavBar());
  const container = document.createElement("div");
  container.setAttribute("id", "content-container");
  content.append(container);
};

const createHeader = () => {
  const header = document.createElement("h3");
  header.innerText = "Hotdog Stand";
  header.classList.add("header");
  return header;
};

const createNavBar = () => {
  const navBar = document.createElement("ul");
  navBar.classList.add("nav-bar");
  navBar.appendChild(createNavItem("Home"));
  navBar.appendChild(createNavItem("Menu"));
  navBar.appendChild(createNavItem("Contact"));
  return navBar;
};

const createNavItem = (innerText) => {
  const navItem = document.createElement("li");
  navItem.classList.add("nav-item");
  navItem.setAttribute("id", innerText);
  const link = document.createElement("a");
  link.innerText = innerText;
  navItem.appendChild(link);
  return navItem;
};

export { pageLoad };
