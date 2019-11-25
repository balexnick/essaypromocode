import "../scss/main.scss";
import '../scss/modules/header.scss';
import '../scss/modules/statusDiscount/index.scss'
import '../scss/modules/statusDiscount/not-active.scss'
import '../scss/modules/popup.scss';
import '../scss/modules/footer.scss';
import '../scss/utils/common.scss';

import './common/open-window'
import './common/popup.js'

document.querySelectorAll(".yakor").forEach(item => {
  item.onclick = function () {
    var elmnt = document.querySelector(".oops-title");
    elmnt.scrollIntoView({
      behavior: "smooth"
    });
  }
})

let openPopup = document.querySelectorAll('.open-popup')
openPopup.forEach((item) => {
  item.addEventListener('click', () => {
    localStorage.setItem('not-active-page-popup', true)
  })
})

