import { StyleSheet, PixelRatio, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

// 设计稿的尺寸
const uiWidthPx = 750;
// 设计稿适配
export const ui = uiPx => {
  return (uiPx * width) / uiWidthPx;
};

export const commonStyle = {
  // 兼容iphone x的设置
  safeAreaTop: "always",
  safeAreaBottom: "always",
  safeAreaTopNever: "never",
  safeAreaBottomNever: "never",
  // 视图的宽高
  width: width,
  height: height,
  // 用到的颜色设置
  defaultBorderColor: "#f2f2f2",
  fontColor: "#a8a8a8",
  fontColorBlack: "#222222",
  fontColorRed: "#eb5050",
  fontBlack: "#333333",
  fontBlack1: "#303030",
  fontGray: "#888888",
  // 字体大小
  textFont: 14,
  textFontLarge: 18,
  uiTextFontTitle: 36,
  // 兼容性处理
  navStatusBarHeight: isIOS ? 20 : 0,
  navHeight: isIOS ? 64 : 56,
  navContentHeight: isIOS ? 44 : 56
};

/* mixin style */
export default StyleSheet.create({
  border1px: {
    borderWidth: 1 / PixelRatio.get(),
    borderStyle: "solid",
    borderColor: commonStyle.defaultBorderColor
  }
});
