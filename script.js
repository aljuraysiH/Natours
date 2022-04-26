const checkbox = document.querySelector(".navigation__checkbox");
const navs = [...document.querySelectorAll(".navigation__link")];

navs.forEach(function (li) {
  li.addEventListener("click", function () {
    checkbox.checked = false;
  });
});
