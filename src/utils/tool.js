/**
 * 封装localstorage
 * @param {any} item 
 */
function localStorageData(item) {
  this.get = () => {
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : '';
  }
  this.set = (obj) => {
    localStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = () => {
    localStorage.removeItem(item);
  }
}
/**
 * 封装sessionStorage
 * @param {any} item 
 */
function sessionStorageData(item) {
  this.get = () => {
    return sessionStorage.getItem(item) ? JSON.parse(sessionStorage.getItem(item)) : '';
  }
  this.set = (obj) => {
    sessionStorage.setItem(item, JSON.stringify(obj));
  }
  this.clear = () => {
    sessionStorage.removeItem(item);
  }
}
const   localTest = new localStorageData('local_test')
const tool = {localTest}
export default tool
