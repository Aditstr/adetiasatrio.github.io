const filter = document.getElementById("filter");
const items = document.querySelectorAll(".card");

filter.addEventListener("input", (e) => filterData(e.target.value));

function filterData(search) {
  items.forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove("d-none");
    } else {
      item.classList.add("d-none");
    }
  });
}

const bookImages = document.querySelectorAll(".card");

bookImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease";
  });

  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
    image.style.transition = "transform 0.3s ease";
  });
});
