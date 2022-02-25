const title = process.env.VUE_APP_BASE_NAME || 'Vue Antd Admin';
/**
 *页面头部显示当前那模块
 * @param {string} pageTitle
 * @returns
 */
export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle}-${title}`;
  }
  return title;
}
