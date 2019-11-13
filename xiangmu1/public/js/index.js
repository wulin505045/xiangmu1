//在public/js/下新建index.js
//专门支持首页中所有功能
//在public/index.html中<body>底部引入js/index.js
$(function() {
  function callback(result) {
    console.log(result);
    new Vue({
      el: "#app", //第一个h3 id="app"
      data: {
        p1: result[0],
        p2: result[1],
        p3: result[2],
        others: result.slice(3)
      }
    });
    console.log(p1);
  }
  funs.getIndex(callback);
});
