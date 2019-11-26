let openPopup = document.querySelectorAll('.open-popup')
let text = document.querySelector(".copy-code");
let button = document.querySelector(".copy-btn");
let test = document.querySelector(".test");


window.onload = function () {
  if (JSON.parse(localStorage.getItem('not-active-page-popup')) === true) {
    document.querySelector('.popup').style.cssText = 'display: flex'
    localStorage.setItem('not-active-page-popup', false)
  }
}
openPopup.forEach((item) => {
  item.addEventListener('click', () => {
    localStorage.setItem('not-active-page-popup', true)
  })
})

button.addEventListener("click", function (e) {
  e.stopPropagation()
  var x = document.createElement("INPUT");
  x.className = "input-copy";
  x.setAttribute("type", "text");
  x.setAttribute("value", text.textContent);
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

document.querySelector('.close-btn').addEventListener('click', (e) => {
  returnToDefault()
})

function returnToDefault() {
  document.querySelector('.popup').style.cssText = 'display: none'

  document.querySelector(".copy-btn").innerHTML = "TAP TO COPY";
  document.querySelector(".copy-btn").style.cssText = `background: #00D66F;`
  document.querySelector('.copy-code').style.cssText = 'text-decoration: inherit;'
}

document.querySelector('.popup').addEventListener('click', () => {
  returnToDefault()
})