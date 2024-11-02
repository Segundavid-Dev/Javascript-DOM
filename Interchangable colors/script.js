// get all the buttons
const btns = document.querySelectorAll(".btn");
const body = document.body;

// for each buttons, attach eventListeners
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    number = btn.value;
    changeB;
  });
});
