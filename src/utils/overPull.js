/**
 * ios微信浏览器，防止过度下拉（或上拉）露出微信黑色背景
 * @description 方案基础样式说明：
 * body{
 *  height: 100%;width: 100vw;overflow: hidden;
 *  #app{
 *    height: 100%;width: 100%;
 *    overflow: hidden;overflow-y: auto;
 *    -webkit-overflow-scrolling: touch;
 *    .template-root{ //vue文件模板根，可以不写，这里便于理解
 *      height: auto;  //可以不写，这里便于理解
 *    }
 *  }
 * }
 */

let options = {
  BELOW_TOP: 1,  //scrollTop在BELOW_TOP内被认为达到顶部
  OVER_BOTTOM: 1, //scrollBottom在OVER_BOTTOM内被认为到达底部
};

/*
* 避免重复声明基础变量，避免不必要的内存浪费
*/
let state = {
  startY: 0,  //起始位置y
};

// let wrapper = 'body';  //dom对象wrapper
let container = '#app'; //容器dom，wrapper的子类

/**
 * 定义OverPull对象
 */
const OverPull = {
  //这里不能使用箭头函数，箭头函数this向上指，指向window而非OverPull
  init: function (selector, opts) { //初始化
    if (!iphone()) {
      return;
    }
    if (selector) {
      container = selector;
    }
    const self = this;
    options = Object.assign(options, opts);
    self.addTouchStart();
    self.addTouchMove();
  },
  destroy: function () {  //销毁
    const self = this;
    self.removeTouchStart();
    self.removeTouchMove();
  },
  addTouchStart: function () {  //监听touchstart
    this.removeTouchStart();
    window.addEventListener('touchstart', touchStartFunc);
  },
  addTouchMove: function () { //监听touchmove
    this.removeTouchMove();
    window.addEventListener('touchmove', touchMoveFunc);
  },
  removeTouchStart: function () { //移除touchstart
    window.removeEventListener('touchstart', touchStartFunc);
  },
  removeTouchMove: function () {  //移除touchmove
    window.removeEventListener('touchmove', touchMoveFunc);
  }
}

/**
 * 判断是否iphone
 */
function iphone () {
 return window.navigator.appVersion.match(/iphone/gi);
}

/**
 * touchStart方法，该方法必须单独声明，才能有效removeEventListener
 * @param {*} evt 
 */
function touchStartFunc (evt) {
  state.startY = evt.changedTouches[0].clientY;
}

/**
 * touchMove方法，该方法必须单独声明，才能有效removeEventListener
 * @param {*} evt 
 * @description 举例说明算法：
 * #app高度为480,#app的scrollTop是距离顶部的距离,
 * #app的firstChild高度为2157
 * 判断到达(或超过)底部 480 + scrollTop - 2157 >= 0 + 误差变量
 */
function touchMoveFunc (evt) {
  const nextY = evt.changedTouches[0].clientY;
  const el = document.querySelector(container);
  const scrollTop = el.scrollTop;
  const offsetHeight = el.offsetHeight;
  if (scrollTop < options.BELOW_TOP && nextY >= state.startY) {
    evt.preventDefault();
  }
  const elChild = el.children[0];
  const childHeight = elChild.offsetHeight;
  const remainHeight = scrollTop + offsetHeight - childHeight;
  if (remainHeight >= options.OVER_BOTTOM && nextY <= state.startY) {
    evt.preventDefault();
  }
  state.startY = nextY;
}

export default OverPull
