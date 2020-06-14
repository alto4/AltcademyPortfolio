const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  project.addEventListener("mouseover", function () {
    project.querySelector(".aspect-ratio-box #overlay").classList.add("show");
  });
});

projects.forEach((project) => {
  project.addEventListener("mouseleave", function () {
    project
      .querySelector(".aspect-ratio-box #overlay")
      .classList.remove("show");
  });
});
