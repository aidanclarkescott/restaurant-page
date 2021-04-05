import { pageLoad } from "./page-init.js";
import { createMenu } from "./menu.js";
import { createContent } from "./home.js";
import { createContact } from "./contact.js";

const navBarSetup = () => {
  const home = document.querySelector("#Home");
  home.addEventListener("click", createContent);
  const menu = document.querySelector("#Menu");
  menu.addEventListener("click", createMenu);
  const contact = document.querySelector("#Contact");
  contact.addEventListener("click", createContact);
};

const start = () => {
  pageLoad();
  createContent();
  navBarSetup();
};

start();
