const createContent = () => {
  const container = document.querySelector("#content-container");
  container.innerHTML = "";
  const body = document.createElement("div");
  body.classList.add("text-background");
  const text = document.createElement("p");
  text.innerText =
    "The best hotdogs in town! We use premium Schnieder hotdogs and sharp aged cheddar cheese. After assembling the dog, we put it in a steamer for 30 seconds to achieve the softest, most fresh dogs. Finally, they can be topped with your condiments of choosing.";
  body.appendChild(text);
  container.append(body);
};

export { createContent };
