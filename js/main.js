function dropdownFunction() {
  const arrowIcon = document.querySelector("#arrow-icon");
  const contentItems = document.querySelector("#content-items-dropdown");
  const contenedor = document.querySelector(".content-dropdown");
  const listItems = Array.from(document.querySelectorAll(".list-item"));
  const subList = document.querySelector(".sub-list");

  // console.log(listItems);
  contenedor.addEventListener("mouseover", () => {
    // console.log("Encima del boton");
    contentItems.classList.remove("unactive");
    contentItems.classList.add("active");
    arrowIcon.classList.remove("rotate");
  });

  contenedor.addEventListener("mouseout", () => {
    // console.log("fuera del boton");
    contentItems.classList.remove("active");
    contentItems.classList.add("unactive");
    arrowIcon.classList.add("rotate");
  });

  //Evento para los sub menu
  listItems.forEach((listItem) => {
    listItem.addEventListener("mouseover", () => {
      // console.log("Click al item");
      subList.classList.remove("unactive");
    });

    listItem.addEventListener("mouseout", () => {
      // console.log("Click al item");
      subList.classList.add("unactive");
    });
  });

  subList.addEventListener("mouseover", () => {
    subList.classList.remove("unactive");
  });

  subList.addEventListener("mouseout", () => {
    subList.classList.add("unactive");
  });
}

dropdownFunction();
