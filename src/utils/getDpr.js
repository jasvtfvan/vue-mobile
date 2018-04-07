/**
 * 获取设备像素比
 */
export default function () {
  let dpr = 1;

  try{
    // var isAndroid = window.navigator.appVersion.match(/android/gi);
    const isIPhone = window.navigator.appVersion.match(/iphone/gi);
    const devicePixelRatio = window.devicePixelRatio;
    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {                
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }
  } catch (e) {
    return 1;
  }

  return dpr;
}
