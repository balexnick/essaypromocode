import "../scss/main.scss";
import '../scss/modules/header.scss';
import '../scss/modules/statusDiscount/index.scss'
import '../scss/modules/popup.scss';
import '../scss/modules/footer.scss';
import '../scss/utils/common.scss';

import './common/open-window'
import './common/popup.js'
window.onload = function () {
  document.querySelector('.popup').style.cssText = 'display: flex'
}
