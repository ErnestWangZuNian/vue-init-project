import utils from "wzn-utils";
let Utils = {
  ...utils,
  blankPlaceholder: "--",
  getContentHeight: () => {
    let clientHeight = document.documentElement.clientHeight;
    return Utils.math.subs(clientHeight, 44, 46);
  },
  getToken: () => {
    let token = Utils.storage.getItem("USERINFO")
      ? Utils.storage.getItem("USERINFO").token
      : null;
    return token;
  },
  getUserInfo: () => {
    let user = Utils.storage.getItem("USERINFO")
      ? Utils.storage.getItem("USERINFO")
      : null;
    return user;
  },
  getUserId: () => {
    let id = Utils.getUserInfo() ? Utils.getUserInfo().id : null;
  }
};
export default Utils;
