import Vue from "vue";
//  图片处理
Vue.filter("showImg", value => {
  // 返回处理后的价格
  if (!value) {
    console.log(value);
    value = `/common/attachment/${value}`;
    return value;
  }
});
//  电话链接
Vue.filter("telLink", value => {
  // 返回处理后的链接
  if (value !== undefined) {
    value = `tel:${value}`;
    return value;
  }
});
//  字符串日期处理
Vue.filter("dateSlice", value => {
  if (value !== undefined && typeof value === "string") {
    value = value.slice(0, 10);
  }
  return value;
});
//  运费处理
Vue.filter("freight", value => {
  let val = "包邮";
  // 返回处理后的价格
  if (value !== undefined) {
    if (value === "") {
      val = "包邮";
    }
    if (value.target_money) {
      val = `满${value.target_money}包邮`;
    }
    if (value.money) {
      val = `￥${(value.money * 100 / 100).toFixed(2)}起`;
    }
    if (value.freight) {
      val = `￥${(value.freight * 100 / 100).toFixed(2)}`;
    }
    return val;
  }
});
// 单个价格处理
Vue.filter("price", value => {
  // 返回处理后的价格
  if (value && typeof value === 'string' || value && typeof value === 'number') {
    value = `￥${(value / 100).toFixed(2)}`;
  } else if (value && value instanceof Array) {
    let len = value.length
    value.sort((a, b) => {
      return a - b
    })
    if (len > 1) {
      value = `￥${(value[0] / 100).toFixed(2)} - ￥${(value[len -1] / 100).toFixed(2)}`
    } else if (len === 1) {
      value = `￥${(value[0] / 100).toFixed(2)}`
    } else {
      value = '￥0.00'
    }
  } else {
    value = '￥0.00'
  }
  return value
});
// 单个积分处理
Vue.filter("score", value => {
  // 返回处理后的价格
  if (value !== undefined) {
    value = value * 100 / 100;
    return value;
  }
});
// 价格除以100
Vue.filter("detailPrice", value => {
  if (value !== undefined) {
    value = "￥" + (value / 100).toFixed(2);
    return value;
  }
});
// 保留两位小数
Vue.filter("stock", value => {
  if (value !== undefined) {
    value = Math.floor(value);
    return value;
  }
});
// 针对规格数组显示进行处理
Vue.filter("spec", value => {
  if (value !== undefined) {
    let val = value.join("-");
    return val;
  }
});
// 处理支付方式
Vue.filter("payway", value => {
  let val = "在线支付";
  if (value !== undefined) {
    switch (value) {
      case 0:
        val = "支付宝支付";
        break;
      case 1:
        val = "微信支付";
        break;
      case 2:
        val = "积分兑换";
        break;
      case 3:
        val = "在线支付";
        break;
      case 4:
        val = "余额支付";
        break;
      default:
        val = "在线支付";
    }
    return val;
  }
});
// 订单状态方式处理
Vue.filter("orderStatus", value => {
  let val = "待支付";
  if (value !== undefined) {
    switch (value) {
      case "at00":
        val = "待支付";
        break;
      case "wfs0":
        val = "待发货";
        break;
      case "wfd1":
        val = "待收货";
        break;
      case "wfc0":
        val = "待评价";
        break;
      case "trm0":
        val = "已完成";
        break;
      case "c000":
        val = "已取消";
        break;
      default:
        val = "全部";
    }
    return val;
  }
});
