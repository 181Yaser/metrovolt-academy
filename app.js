// MetroVolt Academy

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("أهلاً بيك في أكاديمية كهرباء المترو ⚡🚇");
    });
  });

  console.log("MetroVolt Academy is ready!");
});
