function dropdownFunction() {
  const arrowIcon = document.querySelector("#arrow-icon");
  const contentItems = document.querySelector("#content-items-dropdown");
  const contenedor = document.querySelector(".content-dropdown");
  contenedor.addEventListener("mouseover", () => {
    console.log("Encima del boton");
    contentItems.classList.remove("unactive");
    contentItems.classList.add("active");
    arrowIcon.classList.remove("rotate");
  });

  contenedor.addEventListener("mouseout", () => {
    console.log("fuera del boton");
    contentItems.classList.remove("active");
    contentItems.classList.add("unactive");
    arrowIcon.classList.add("rotate");
  });
}

dropdownFunction();
