let getCode = document.querySelectorAll('.get-code')
let text = document.querySelector(".copy-code").textContent;
let button = document.querySelector(".copy-btn");
let test = document.querySelector(".test");
getCode.forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelector('.popup').style.cssText = `
      display: flex
    `
  })
})

button.addEventListener("click", function () {
  var x = document.createElement("INPUT");
  x.className = "input-copy";
  x.setAttribute("type", "text");
  x.setAttribute("value", text);
  document.body.appendChild(x);
  document.querySelector("INPUT").select();
  document.execCommand("copy");
  this.innerHTML = "COPIED";
  this.style.cssText = `background: #7666C7;`
  document.querySelector('.copy-code').style.cssText = `
    text-decoration: line-through
  `
  test.appendChild(x);
  test.removeChild(x);
});

document.querySelector('.close-btn').addEventListener('click', () => {
  document.querySelector('.popup').style.cssText = `
    display: none
  `
})