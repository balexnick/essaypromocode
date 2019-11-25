import "../scss/main.scss";
import '../scss/modules/header.scss';
import '../scss/modules/allDiscounts/index.scss';
import '../scss/modules/popup.scss';
import '../scss/modules/footer.scss';


import './common/open-window'
import './common/popup.js'
import './common/pagination.min.js'



$("#listShow").cPager({
  pageSize: 8,
  pageid: "pager",
  itemClass: "discount",
  pageIndex: 1
});
