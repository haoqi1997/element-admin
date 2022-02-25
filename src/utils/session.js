/**
 * 设置sessionStorage
 * sessionStorage 用于临时保存同一窗口(或标签页)的数据，在   关闭窗口  或  标签页之后  将会  删除   这些数据。  关闭及删除！！！
 * 如果你想在浏览器窗口关闭后还保留数据，可以使用 localStorage 属性， 该数据对象没有过期时间，今天、下周、明年都能用，除非你手动去删除
 * localStorage 用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去删除。localStorage 属性是只读的。
 * @param {string} key
 * @param {any} value
 */
export function setCache (key, value) {
  if (value == undefined || value == null) {
    window.sessionStorage.setItem(key, value);
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
}

/**
 * 获取sessionStorage
 * @param {string} key
 * @returns {any}
 */
export function getCache (key) {
  if (window.sessionStorage.getItem(key) == 'undefined' || window.sessionStorage.getItem(key) == null) {
    return undefined;
  }
  return JSON.parse(window.sessionStorage.getItem(key));
}

/**
 * 清除指定sessionStorage
 * @param {string} key
 */
export function removeCache (key) {
  return window.sessionStorage.removeItem(key);
}

/**
 * 清除所有sessionStorage
 */
export function removeAll (key) {
  return window.sessionStorage.clear();
}
