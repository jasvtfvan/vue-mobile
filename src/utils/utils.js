/*
 * @Author: henry yan
 * @Date:   2016-07-29 16:25:01
 *
 *
 */

// import JsEncrypt from 'jsencrypt'

// import JsEncrypt from './jsencrypt'
import _ from "lodash";
export const setCookie = (name, value) => {
  var Days = 30;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + escape(value) + ";expires=" + exp.toGMTString();
};

export const getCookie = name => {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

  if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
  else return null;
};

//
export const delCookie = name => {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
};

//
export const getQueryString = name => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};

//文件下载
export const downloadFile = url => {
  try {
    console.log("try");
    var elemIF = document.createElement("iframe");
    elemIF.src = url;
    elemIF.style.display = "none";
    document.body.appendChild(elemIF);
    elemIF.onload = function(event) {};
  } catch (e) {}
};

function formatDate(date) {
  var myyear = date.getFullYear();
  var mymonth = date.getMonth() + 1;
  var myweekday = date.getDate();
  var myhours = date.getHours();
  var myminutes = date.getMinutes();
  var myseconds = date.getSeconds();

  if (mymonth < 10) {
    mymonth = "0" + mymonth;
  }
  if (myweekday < 10) {
    myweekday = "0" + myweekday;
  }
  if (myhours < 10) {
    myhours = "0" + myhours;
  }
  if (myminutes < 10) {
    myminutes = "0" + myminutes;
  }
  if (myseconds < 10) {
    myseconds = "0" + myseconds;
  }
  return (
    myyear +
    "-" +
    mymonth +
    "-" +
    myweekday +
    " " +
    myhours +
    ":" +
    myminutes +
    ":" +
    myseconds
  );
}

function getMonthDays(myMonth) {
  //获得某月的天数
  myMonth = parseInt(myMonth); //这一步很重要，有时候传进来的可能是字符串，后面+1的时候会变成字符串相连
  var monthStartDate = new Date(nowYear, myMonth, 1); //当月1号的时间戳
  var monthEndDate = new Date(nowYear, myMonth + 1, 1); //下月1号的时间戳
  var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24); //求差即可取得某月天数
  return days;
}

var now = new Date(); //当前日期
var nowDayOfWeek = now.getDay(); //今天本周的第几天
var nowDay = now.getDate(); //当前日
var nowMonth = now.getMonth(); //当前月
var nowYear = now.getFullYear(); //当前年

/**
 * 获得本月的开端日期
 */
export const getMonthStartDate = () => {
  var monthStartDate = new Date(nowYear, nowMonth, 1);
  return formatDate(monthStartDate);
};

/**获得本月的停止日期
 */
export const getMonthEndDate = () => {
  var monthEndDate = new Date(nowYear, nowMonth, getMonthDays(nowMonth));
  return formatDate(monthEndDate);
};

//滚动条在Y轴上的滚动距离
export const getScrollTop = document => {
  var scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
};

//文档的总高度
export const getScrollHeight = document => {
  var scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0
      ? bodyScrollHeight
      : documentScrollHeight;
  return scrollHeight;
};

//浏览器视口的高度
export const getWindowHeight = document => {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

export const getParam = paramName => {
  // paramValue = "", isFound = !1;
  // if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
  //     arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
  //     while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
  // }
  // return paramValue == "" && (paramValue = null), paramValue

  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};

function addEvent(elm, evType, fn) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, false); //DOM2.0
    return true;
  } else if (elm.attachEvent) {
    var r = elm.attachEvent("on" + evType, fn); //IE5+
    return r;
  } else {
    elm["on" + evType] = fn; //DOM 0
  }
}

// add img and video poplayer

function addEvent(elm, evType, fn) {
  if (elm.addEventListener) {
    elm.addEventListener(evType, fn, false); //DOM2.0
    return true;
  } else if (elm.attachEvent) {
    var r = elm.attachEvent("on" + evType, fn); //IE5+
    return r;
  } else {
    elm["on" + evType] = fn; //DOM 0
  }
}

export const createPop = (type, url, w, h, document, e) => {
  event.stopPropagation();
  var elemWrap = document.createElement("div");
  var elemModal = document.createElement("div");
  var elemDialog = document.createElement("div");
  var elemImg = document.createElement("img");
  var elemClose = document.createElement("i");
  var elemVideo = document.createElement("video");

  elemWrap.setAttribute("class", "el-dialog__wrapper");
  elemWrap.setAttribute("id", "el-dialog__wrapper");

  elemModal.setAttribute("class", "v-modal");
  elemModal.setAttribute("id", "v-modal");

  elemDialog.setAttribute("class", "el-dialog__body");
  elemDialog.setAttribute("id", "el-dialog__body");

  elemClose.setAttribute("class", "el-close-pop");
  elemClose.setAttribute("id", "el-close-pop");
  elemClose.style.marginTop = -(h / 2 + 22) + "px";
  elemClose.style.marginLeft = w / 2 - 10 + "px";

  elemImg.src = url;
  elemImg.setAttribute("class", "el-preview_img");
  elemImg.setAttribute("id", "el-preview_img");
  elemImg.style.marginTop = -h / 2 + "px";
  elemImg.style.marginLeft = -w / 2 + "px";

  elemVideo.setAttribute("src", url);
  elemVideo.setAttribute("controls", "controls");
  elemVideo.setAttribute("autoplay", "autoplay");
  elemVideo.setAttribute("class", "video-player");
  elemVideo.setAttribute("id", "video-player");

  if (type == "image") {
    elemDialog.appendChild(elemImg);
  } else {
    elemDialog.appendChild(elemVideo);
  }

  elemDialog.appendChild(elemClose);
  elemWrap.appendChild(elemDialog);
  document.body.appendChild(elemWrap);
  document.body.appendChild(elemModal);

  function hide() {
    document.body.removeChild(document.getElementById("el-dialog__wrapper"));
    document.body.removeChild(document.getElementById("v-modal"));
  }

  addEvent(document.getElementById("el-close-pop"), "click", hide, false);
};

//判断window scroll reach bottom

//   if (getScrollTop(element) + getWindowHeight(element) == getScrollHeight(element)) {
//     //self.loadMore();
//      console.log("加载更多");
//   }

//判断 element scroll reach bottom
// var o= element;
// if (o.offsetHeight + o.scrollTop == o.scrollHeight) {
//   //self.loadMore();
// }

//json 对象合并
//调用方式
// var a ={"a":"1","b":"2"}
// var b ={"c":"3","d":"4","e":"5"}
// var c = extend({}, [a,b]);
export const extend = (des, src, override) => {
  if (src instanceof Array) {
    for (var i = 0, len = src.length; i < len; i++)
      extend(des, src[i], override);
  }
  for (var i in src) {
    if (override || !(i in des)) {
      des[i] = src[i];
    }
  }
  return des;
};

//深拷贝

export const cloneObj = obj => {
  var str,
    newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== "object") {
    return;
  } else if (window.JSON) {
    (str = JSON.stringify(obj)), (newobj = JSON.parse(str)); //系列化对象 //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === "object" ? cloneObj(obj[i]) : obj[i];
    }
  }
  return newobj;
};

//判断输入的是否是正整数

export const isPositiveInteger = n => {
  return n >>> 0 === parseFloat(n);
};

// 获取浏览器窗口对象
export const getBrowseHeight = () => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  return {
    x: x,
    y: y
  };
};

//匹配中国电话号码的正则表达式

/**
电信
中国电信手机号码开头数字
2G/3G号段（CDMA2000网络）133、153、180、181、189
4G号段 177
联通
中国联通手机号码开头数字
2G号段（GSM网络）130、131、132、155、156
3G上网卡145
3G号段（WCDMA网络）185、186
4G号段 176、185[1]
移动
中国移动手机号码开头数字
2G号段（GSM网络）有134x（0-8）、135、136、137、138、139、150、151、152、158、159、182、183、184。
3G号段（TD-SCDMA网络）有157、187、188
3G上网卡 147
4G号段 178*/

export const testPhone = val => {
  return !/^1[3|4|5|7|8][0-9]{9}$/.test(val);
};

export const testEmail = val => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
    val
  );
};

//获取当前相对路径的方法
export const GetUrlRelativePath = val => {
  var url = document.location.toString();
  var arrUrl = url.split("//");

  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符

  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl;
};

export const GetUrlPara = val => {
  var url = document.location.toString();
  var arrUrl = url.split("?");

  var para = arrUrl[1];
  return para;
};

//加密
export const RSAencrypt = (key, val, self) => {
  //实例化jsEncrypt对象
  let jse = new self.$jsEncrypt();
  //设置公钥
  jse.setPublicKey(key);
  //加密密
  return jse.encrypt(val);
};

//长文本加密
export const encryptLong = (key, val, self) => {
  //实例化jsEncrypt对象
  let jse = new self.$jsEncrypt();
  //设置公钥
  jse.setPublicKey(key);
  //加密密
  return jse.encryptLong(val);
};

// //加密
// export const encryptLong=(key, val,self)=>{
//     //实例化jsEncrypt对象
//     let jse = new self.$jsEncrypt;
//     //设置公钥
//     jse.setPublicKey(key);
//     //加密密
//     return jse.encryptLong(val);
// }

//解密
export const RSAdecrypt = (key, val, self) => {
  //实例化jsEncrypt对象
  let jse = new self.$jsEncrypt();
  //设置公钥
  jse.setPrivateKey(key);
  //return jse.decrypt(val);
  return jse.encryptLong(val);
};

/**
 * 长文本加密
 * @param {string} string 待加密长文本
 * @returns {string} 加密后的base64编码
 * */
//    JSEncrypt.prototype.encryptLong = function (string) {
//     var self=this;
//     var k = this.getKey();
//     try {
//         var ct = "";
//         //RSA每次加密117bytes，需要辅助方法判断字符串截取位置
//         //1.获取字符串截取点
//         var bytes = new Array();
//         bytes.push(0);
//         var byteNo = 0;
//         var len, c;
//         len = string.length;
//         var temp = 0;
//         for (var i = 0; i < len; i++) {
//             c = string.charCodeAt(i);
//             if (c >= 0x010000 && c <= 0x10FFFF) {  //特殊字符，如Ř，Ţ
//                 byteNo += 4;
//             } else if (c >= 0x000800 && c <= 0x00FFFF) { //中文以及标点符号
//                 byteNo += 3;
//             } else if (c >= 0x000080 && c <= 0x0007FF) { //特殊字符，如È，Ò
//                 byteNo += 2;
//             } else { // 英文以及标点符号
//                 byteNo += 1;
//             }
//             if ((byteNo % 117) >= 114 || (byteNo % 117) == 0) {
//                 if (byteNo - temp >= 114) {
//                     bytes.push(i);
//                     temp = byteNo;
//                 }
//             }
//         }
//         //2.截取字符串并分段加密
//         if (bytes.length > 1) {
//             for (var i = 0; i < bytes.length - 1; i++) {
//                 var str;
//                 if (i == 0) {
//                     str = string.substring(0, bytes[i + 1] + 1);
//                 } else {
//                     str = string.substring(bytes[i] + 1, bytes[i + 1] + 1);
//                 }
//                 var t1 = k.encrypt(str);
//                 ct += t1;
//             }
//             ;
//             if (bytes[bytes.length - 1] != string.length - 1) {
//                 var lastStr = string.substring(bytes[bytes.length - 1] + 1);
//                 ct += k.encrypt(lastStr);
//             }
//             return self.hex2b64(ct);
//         }
//         var t = k.encrypt(string);
//         var y = self.hex2b64(t);
//         return y;
//     } catch (ex) {
//         console.log("异常信息");
//         console.log(ex);
//         return false;
//     }
// };

// JsEncrypt.prototype.encryptLong = function(string) {

//     console.log("长文本加密处理");
//     var k = this.getKey();
//     var maxLength = (((k.n.bitLength()+7)>>3)-11);

//     try {
//       var lt = "";
//       var ct = "";

//       if (string.length > maxLength) {
//         lt = string.match(/.{1,50}/g);
//         lt.forEach(function(entry) {
//           var t1 = k.encrypt(entry);
//           ct += t1 ;
//         });
//         return hex2b64(ct);
//       }
//       var t = k.encrypt(string);
//       var y = hex2b64(t);
//       return y;
//     } catch (ex) {

//         console.log("异常信息");
//         console.log(ex);
//       return false;
//     }
//   };

// callback
export const callback = (data, fn, self) => {
  if (data.success) {
    self.$message({
      // showClose: true,
      message: data.msg,
      type: "success"
    });
    fn();
  } else {
    self.$message({
      // showClose: true,
      message: data.msg,
      type: "error"
    });
  }
};

//

export const switchLogin = (val, self) => {
  // if (val.data) {
  //   if (val.data.code == "401") {
  //     self.$router.push({
  //       path: "/login"
  //     });
  //   }
  // }

  self.$router.push({
    path: "/login"
  });
};

//表单验证
export const validateForm = (val, self) => {
  for (let k = 0; k < val.length; k++) {
    if (!val[k].key) {
      self.$message({
        message: val[k].value,
        type: "warning"
      });
      return false;
    }
  }

  return true;
};

export const warning = (val, self) => {
  self.$message({
    message: val,
    type: "warning"
  });
};

export const getValueByKey = (sourceData, checked) => {
  let result = [];
  _.forEach(checked, p => {
    _.forEach(sourceData, s => {
      if (p == s.key) {
        result.push(s.value);
      }
    });
  });

  return result;
};

export const getKeyByValue = (sourceData, checked) => {
  let result = [];
  _.forEach(checked, p => {
    _.forEach(sourceData, s => {
      if (p == s.value) {
        result.push(s.key);
      }
    });
  });

  return result;
};

export const arrayUnique = (arr, name) => {
  var hash = {};
  return arr.reduce(function(item, next) {
    hash[next[name]] ? "" : (hash[next[name]] = true && item.push(next));
    return item;
  }, []);
};

export const uniqCollection = data => {
  let arr = [];
  _.forEach(data, val => {
    // if (val.key) {
    //   arr.push(JSON.stringify(val));
    // }
    arr.push(JSON.stringify(val));
  });

  return _.map(_.uniq(arr), item => {
    return JSON.parse(item);
  });
};

// export const uniqCollection = array => {
//   var obj = {};
//   return array.filter(function(item, index, array) {
//     // console.log(typeof item + JSON.stringify(item));
//     return obj.hasOwnProperty(typeof item + JSON.stringify(item))
//       ? false
//       : (obj[typeof item + JSON.stringify(item)] = true);
//   });
// };

// function unique(array) {
//   var obj = {};
//   return array.filter(function(item, index, array){
//       console.log(typeof item + JSON.stringify(item))
//       return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
//   })
// }

//Special characters
export const isHasSpecChart = val => {
  var containSpecial = RegExp(
    /[(\ )(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\-)(\_)(\+)(\=)(\[)(\])(\{)(\})(\|)(\\)(\;)(\:)(\')(\")(\,)(\.)(\/)(\<)(\>)(\?)(\)]+/
  );
  return containSpecial.test(val);
};

export const uniq = data => {
  let arr = [];
  _.forEach(data, val => {
    arr.push(JSON.stringify(val));
  });

  return _.map(_.uniq(arr), item => {
    return JSON.parse(item);
  });
};

export const getStringLength = val => {
  return val.replace(/[\u0391-\uFFE5]/g, "aa").length; //先把中文替换成两个字节的英文，在计算长度
};

export const toThousands = num => {
  var result = [],
    counter = 0;
  num = (num || 0).toString().split("");
  for (var i = num.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(num[i]);
    if (!(counter % 3) && i != 0) {
      result.unshift(",");
    }
  }
  return result.join("");
};

export const checksum = chars => {
  var sum = 0;

  for (var i = 0; i < chars.length; i++) {
    var c = chars.charCodeAt(i);

    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      sum++;
    } else {
      sum += 2;
    }
  }

  return sum;
};

export const getElementTopLeft = obj => {
  var top = 0;
  var left = 0;

  while (obj) {
    top += obj.offsetTop;
    left += obj.offsetLeft;

    obj = obj.offsetParent;
  }

  return { top: top, left: left };
};

export const mitulineHide = (num, element) => {
  //var contain = document.getElementById(con);
  var contain = element;
  var maxSize = num;
  var txt = contain.innerHTML;
  if (txt.length > num) {
    console.log("1");
    txt = txt.substring(0, num - 1) + "...";
    contain.innerHTML = txt;
  } else {
    console.log("error");
  }
};

// export const getScrollTop=val=>{
//   var scrollPos;
//   if (window.pageYOffset) {
//   scrollPos = window.pageYOffset; }
//   else if (document.compatMode && document.compatMode != 'BackCompat')
//   { scrollPos = document.documentElement.scrollTop; }
//   else if (document.body) { scrollPos = document.body.scrollTop; }
//   return scrollPos;

// }

// 验证网址
export const checkUrl = url => {
  //return /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(val);

  var strRegex =
    "(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]";
  var url;
  var re = new RegExp(strRegex);
  return re.test(url);
};

//根据出生日期计算年龄
export const getAges = str => {
  var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
  if (r == null) return false;
  var d = new Date(r[1], r[3] - 1, r[4]);
  if (
    d.getFullYear() == r[1] &&
    d.getMonth() + 1 == r[3] &&
    d.getDate() == r[4]
  ) {
    var Y = new Date().getFullYear();
    return Y - r[1];
    //return '年龄   =   ' + (Y - r[1]) + '   周岁';
  }
  return "输入的日期格式错误！";
};

export const getParamString = data => {
  const Base64 = require("js-base64").Base64;
  return Base64.encode(JSON.stringify(data));
};








export const scrollAnimation = (currentY, targetY) => {
  // 获取当前位置方法
  // const currentY = document.documentElement.scrollTop || document.body.scrollTop

  // 计算需要移动的距离
  let needScrollTop = targetY - currentY;
  let _currentY = currentY;
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10);
    _currentY += dist;
    window.scrollTo(_currentY, currentY);
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      scrollAnimation(_currentY, targetY);
    } else {
      window.scrollTo(_currentY, targetY);
    }
  }, 1);
};
