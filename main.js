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

const readButtons = document.querySelectorAll(".btn");

readButtons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "red";
    button.style.color = "white";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
});
