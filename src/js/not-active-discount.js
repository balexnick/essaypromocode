import "../scss/main.scss";
import '../scss/modules/header.scss';
import '../scss/modules/statusDiscount/index.scss'
import '../scss/modules/statusDiscount/not-active.scss'
import '../scss/modules/popup.scss';
import '../scss/modules/footer.scss';
import '../scss/utils/common.scss';

import './common/popup.js'

window.onload = function () {
  document.querySelector(".yakor").onclick = function () {
    var elmnt = document.querySelector(".oops-title");
    elmnt.scrollIntoView({
      behavior: "smooth"
    });
  }
}