document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelectorAll("frame").
    forEach(el => el.addEventListener("click", function (event) {
      alert("lol");
    }));
});
