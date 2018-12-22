var easingPattern = function (settings, time) {
  var pattern;

  // Default Easing Patterns
  if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
  if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
  if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
  if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
  if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
  if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
  if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
  if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
  if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
  if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
  if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
  if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

  return pattern || time; // no easing, no acceleration
};


function getScrollTarget(el) {
  var currentNode = el;
  while (currentNode) {
    if (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType == 1) {
      var overflowY = getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY == 'auto') {
        return currentNode;
      }
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}

function getPosition(anchor, offset = 0) {
  var position = 0
  do {
    position += anchor.offsetTop
    anchor = anchor.offsetParent
  } while (anchor);
  return position + offset
}

var start = 0,
  myReq,
  defaultOptions = {
    easing: 'easeInCubic',
    speed: 500
  }

class SmoothScroll {
  constructor(options) {
    this.options = {...defaultOptions, ...options}
    this.scrollTarget = null
    this.init()
  }

  getScrollHeight(scrollTarget) {
    if(scrollTarget == window) {
      return window.pageYOffset
    } else {
      return scrollTarget.scrollTop
    }
  }

  scrollTo(anchor, offset) {
    this.scrollTarget = getScrollTarget(anchor)
    this.startPosition = this.getScrollHeight(this.scrollTarget)
    this.endPosition = getPosition(anchor, offset)
    this.timeLapsed = 0
    // console.log('before', this);
    myReq = window.requestAnimationFrame(this.loopAnimateScroll.bind(this))
  }

  stopAnimateScroll(position) {
    var scroll = false
    if(this.startPosition >= this.endPosition) {
      if(position <= this.endPosition) {
        scroll = true
      }
    }

    if(this.startPosition < this.endPosition) {
      if(position >= this.endPosition) {
        scroll = true
      }
    }

    if (scroll) {
      start = 0
      this.timeLapsed = 0
      this.adjustFocus()
      window.cancelAnimationFrame(myReq);
      return true
    }
  }

  loopAnimateScroll(timestamp) {
    var position, percentage, distance
    if (!start) start = timestamp
    this.timeLapsed += timestamp - start
    percentage = this.timeLapsed / this.options.speed
    distance = this.endPosition - this.startPosition
    position = this.startPosition + (distance * easingPattern(this.options, percentage))
    position =  Math.round(position)

    // console.log('position', position, 'endPosition', this.endPosition, 'startPosition', this.startPosition);

    this.setScrollPosition(position)

    if (!this.stopAnimateScroll(position)) {
      myReq = window.requestAnimationFrame(this.loopAnimateScroll.bind(this))
      start = timestamp
    }
  }

  setScrollPosition(position) {
    if(this.scrollTarget == window) {
      window.scrollTo(0,position)
    } else {
      this.scrollTarget.scrollTop = position
    }
  }

  adjustFocus() {
    this.setScrollPosition(this.endPosition)
  }

  clickHandler(e) {
    var target = e.target
    this.hashChangeHandler(target)
  }

  hashChangeHandler(target) {
    if(target.getAttribute('smooth-scroll-id') == null) return
    var anchor = document.querySelector(target.getAttribute('href'))
    if (anchor) {
      this.scrollTo(anchor)
    }
  }

  init() {
    document.addEventListener('click', this.clickHandler.bind(this), false)
    document.addEventListener('hashchange', this.hashChangeHandler.bind(this), false)
  }
}
module.exports = SmoothScroll