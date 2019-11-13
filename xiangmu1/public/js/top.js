var ul = document.getElementsByClassName("top_2")[0];
ul.onmouseover = function(e) {
  //1找到所有的子元素
  var lis = this.children;
  // console.log(lis);
  // console.log(e.target.parentNode);

  var j = 0;
  for (let i = 0; i < lis.length; i++) {
    // console.log(lis[i].innerHTML);
    // console.log(lis[i]);
    if (lis[i] == e.target.parentNode) {
      j = i + 1;
    }
  }

  //2.找到当前点击的元素是第几个元素
  //3.找到要修改的元素是下面ul的第几个li
  var li2 = document.querySelector(`ul.in>li:nth-child(${j})`);
  // console.log(li2);
  li2.style.display = "block";//显示
};
$(".in>li").mouseover(function() {
  $(this).show();
});

ul.onmouseout = function(e) {
  //1找到所有的子元素
  var lis = this.children;
  // console.log(lis);
  // console.log(e.target.parentNode);

  var j = 0;
  for (let i = 0; i < lis.length; i++) {
    // console.log(lis[i].innerHTML);
    // console.log(lis[i]);
    if (lis[i] == e.target.parentNode) {
      j = i + 1;
    }
  }
  //2.找到当前点击的元素是第几个元素
  //3.找到要修改的元素是下面ul的第几个li
  var li2 = document.querySelector(`ul.in>li:nth-child(${j})`);
  // console.log(li2);
  li2.style.display = "none";
};
$(".in>li").mouseout(function() {
  $(this).hide();
});











