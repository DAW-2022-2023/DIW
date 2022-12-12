document.addEventListener("DOMContentLoaded", function () {
  const balloonsContainer = document.getElementById("balloons-container");
  const balloons = balloonsContainer.children;

  for (let i = 0; i < balloons.length; i++) {
    const balloon = balloons[i];
    balloon.addEventListener("click", pop, false);

    setInterval(function () {
      setStyleBallon(balloon);
    }, Math.floor(Math.random() * (8000 - 4000) + 4000));
    setStyleBallon(balloon);
  }
});

function setStyleBallon(balloon) {
  const top = Math.floor(Math.random() * 100);
  const endTop = Math.floor(Math.random() * 100);
  const left = Math.floor(Math.random() * 100);
  const endLeft = Math.floor(Math.random() * 100);
  balloon.style.cssText = `--top:${top}vh; --endTop:${endTop}vh; --left:${left}vw; --endLeft:${endLeft}vw;`;
}

function pop(e) {
  var element = e.target;
  element.style.display = "none";
  e.preventDefault();
  e.stopPropagation();
}
