/**
 * ios微信浏览器，防止过度下拉（或上拉）露出微信黑色背景
 */

let options = {	//不使用上下文，避免上下文暴露
  OVER_TOP: 1,  //scrollTop在OVER_TOP内被认为达到顶部
};

/*
* 避免重复声明基础变量，避免不必要的内存浪费
*/
let state = { //不使用上下文，避免上下文暴露
  startY: 0,  //起始位置y
};

let selector = 'body';  //dom对象selector

/**
 * 定义OverPull对象
 */
const OverPull = {
  //这里不能使用箭头函数，箭头函数this向上指，指向window而非OverPull
  init: function (selector, opts) { //初始化
    if (!iphone()) {
      return;
    }
    const self = this;
    if (selector) {
      selector = selector;
    }
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
 */
function touchMoveFunc (evt) {
  const nextY = evt.changedTouches[0].clientY;
  const scrollTop = document.querySelector(selector).scrollTop;
  if (scrollTop < options.OVER_TOP && nextY >= state.startY) {
    state.startY = nextY;
    evt.preventDefault();
  }
  state.startY = nextY;
}

export default OverPull
