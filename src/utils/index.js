import utils from "wzn-utils";
let Utils = {
  ...utils,
  blankPlaceholder: "--",
  getContentHeight: () => {
    let clientHeight = document.documentElement.clientHeight;
    return Utils.math.subs(clientHeight, 44, 46);
  },
  getToken: () => {
    let token = Utils.storage.getItem("USERINFO") ?
      Utils.storage.getItem("USERINFO").token :
      null;
    return token;
  }
};
export default Utils;
