import utils from "wzn-utils";
let Utils = {
  ...utils,
  blankPlaceholder: "--",
  getToken: () => {
    let token = Utils.storage.getItem("USERINFO")
      ? Utils.storage.getItem("USERINFO").token
      : null;
    return token;
  }
};
export default Utils;
