var i = 0; //现在正在显示第几张图片，从0开始
var LIWIDTH = 1903; //每个li的固定宽度
var DURATION = 500; //每次轮播动画持续的时间
var LICOUNT = 4; //li的总个数
//要移动的ul
var ulImgs = document.getElementById("ul-imgs");
//包含小圆点列表的ul
var ulIdxs = document.getElementById("ul-idxs");
//小圆点的元素列表
var lis = ulIdxs.children;
//从当前位置移动到任意一个范围内的位置
function moveTo(to) {
  //如果用户没有传入要跳到第几张图，就默认跳到当前图的下一个张
  if (to == undefined) {
    to = i + 1;
  }
  if (i == 0) {
    //如果滚动从头开始，再重新加上transition
    if (to > i) {
      //如果要看当前位置右边的图片，是不会出问题的
      ulImgs.className = "transition";
    } else {
      //只有i=0在开头，且还要看左边的图片时，才会出问题
      //为了避免用户再次看到偷梁换柱的效果，先把transition class去掉
      ulImgs.className = "";
      //将ulImgs拉取到最左侧
      ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
      //定时器是为了将偷梁换柱操作和加回transition属性的操作强行隔离开
      setTimeout(function() {
        moveTo(LICOUNT - 1);
      }, 100);
      return;
    }
  }
  i = to; //先将表示第几张图片的变量i变为目标位置
  //再用i计算ulimgs的marginLeft距离
  ulImgs.style.marginLeft = -i * LIWIDTH + "px";
  //先删除所有小圆点的class
  for (var li of lis) {
    li.className = "";
  }
  if (i == LICOUNT) {
    i = 0;
    //当transition动画播放完之后，才
    setTimeout(function() {
      ulImgs.className = ""; //清掉transition属性
      ulImgs.style.marginLeft = 0; //将ulImgs拉回0位置
    }, DURATION);
  }
  //再给当前位置的小圆点添加class active
  lis[i].className = "active";
}
var interval = 5000;
var timer = setTimeout(function() {
  moveTo();
}, 5000);
var index1 = document.getElementById("index1");
index1.onmouseover = function() {
  clearInterval(timer);
};
index1.onmouseout = function() {
  timer = setInterval(function() {
    moveTo();
  }, 5000);
};
var canClick = true;
ulIdxs.onmouseover = function(e) {
  if (canClick) {
    var li = e.target;
    if (li.nodeName == "LI") {
      if (li.className !== "active") {
        for (var i = 0; i < lis.length; i++) {
          if (lis[i] == li) {
            break;
          }
        }
        moveTo(i);
        setTimeout(function() {
          canClick = true;
        }, DURATION);
      }
    }
  }
};
